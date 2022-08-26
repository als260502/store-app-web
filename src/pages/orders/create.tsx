import { FormEvent, useCallback, useRef, useState } from "react";
import { NextPage } from "next";

import { v4 as uuid } from "uuid";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {
  Category,
  Product,
  StoreUser,
  useCreateOrderItemMutation,
  useCreateOrderMutation,
  useCreateSingleOrderMutation,
  useGetProductsGreaterThanZeroLazyQuery,
  useGetStoreUsersLazyQuery,
  useRemoveOrderItemMutation,
  useRemoveOrderMutation,
  useUpdateOrderByIdMutation,
  useUpdateProductQuantityMutation,
} from "../../graphql/generated";
import toast, { Toaster } from "react-hot-toast";
import {
  ProductItem,
  Props,
} from "../../components/OrderComponents/ProductItem";
import { Search } from "../../components/Search";
import { OrderItemFooter } from "../../components/OrderComponents/OrderItemFooter";
import { catchError, CustomError } from "../../utils/errorHandle";
import { OrderSidebar } from "../../components/Sidebar/order";

type OrderProps = {
  id?: string;
  user: StoreUser;
  product: Product;
  total: number;
};

type Suggestion = {
  id: string;
  categories: Category[];
  name: string;
  color: string[];
  size: string[];
  price: number;
  quantity: number;
};

const Create: NextPage = () => {
  const [userText, setUserText] = useState("");
  const [usersSuggestions, setUsersSuggestions] = useState<
    StoreUser[] | undefined
  >([]);

  const [orderPaymentType, setOrderPaymentType] = useState("Dinheiro");
  const [parcel, setParcel] = useState("1");

  const [hasOpenOrder, setHasOpenOrder] = useState(false);

  const [productText, setProductText] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[] | undefined>([]);

  const [order, setOrder] = useState<OrderProps>({} as OrderProps);
  const [orderItems, setOrderItems] = useState<Props[]>([]);

  const [total, setTotal] = useState(0);

  const [orderType, setOrderType] = useState(false);
  const orderValueRef = useRef<HTMLInputElement>(null);
  const orderTypeRef = useRef<HTMLInputElement>(null);

  const [, { refetch: getProducts }] = useGetProductsGreaterThanZeroLazyQuery();
  const [, { refetch: getUsers }] = useGetStoreUsersLazyQuery();

  const [loading, setLoading] = useState(false);

  const onUserChangeHandler = useCallback(
    async (text: string) => {
      if (text.length > 3) {
        const response = await getUsers();
        const regex = new RegExp(`${text}`, "gi");

        const userFiltered = response.data?.storeUsers?.filter(user => {
          return (
            regex.test(user.name) ||
            regex.test(String(user?.nickname)) ||
            regex.test(String(user?.email))
          );
        }) as StoreUser[];

        setUsersSuggestions(userFiltered);
      } else {
        setUsersSuggestions([]);
      }
      setUserText(text);
    },
    [getUsers]
  );

  const handleGetUserId = useCallback(
    (user: StoreUser) => {
      setUserText(user.name);

      const newOrder = {
        user,
      };

      setOrder(Object.assign(order, newOrder));
    },
    [order]
  );

  const onProductChangeHandler = useCallback(
    async (text: string) => {
      if (text.length > 3) {
        const response = await getProducts();
        const regex = new RegExp(`${text}`, "gi");

        const productsFiltered = response.data?.products?.filter(
          product =>
            (product.quantity > 0 && regex.test(product.name)) ||
            (product.quantity > 0 && regex.test(product.slug))
        ) as Product[];

        const newProduct = productsFiltered?.map(product => {
          const newColor = product.color.map(c => c.name);
          const newSize = product.size.map(s => s.name);

          return {
            id: product.id,
            categories: product.categories,
            name: product.name,
            color: newColor,
            size: newSize,
            price: product.sellPrice,
            quantity: product.quantity,
          };
        });

        setSuggestions(newProduct);
      } else {
        setSuggestions([]);
      }
      setProductText(text);
    },
    [getProducts]
  );

  const handleGetProductId = useCallback(
    (product: Suggestion) => {
      setProductText(`${product.name}`);
      const newOrder = {
        product,
      };

      setOrder(Object.assign(order, newOrder));
    },
    [order]
  );

  const [updateOrderbyId] = useUpdateOrderByIdMutation();
  const updateTotalOrder = useCallback(async () => {
    try {
      const setTotalOrder = orderItems.reduce(
        (prev, acc) => prev + acc.total,
        0
      );

      await updateOrderbyId({
        variables: {
          orderId: String(order.id),
          orderValue: setTotalOrder,
          total: setTotalOrder,
        },
      });
    } catch (error) {
      console.error("update total order", error);
    }
  }, [updateOrderbyId, orderItems, order?.id]);

  const handleCloseOrder = useCallback(async () => {
    // updateTotalOrder();

    const item = uuid();

    const items = orderItems.filter(orderItem => orderItem.id === item);
    setTotal(0);
    setOrderItems(items);
    setHasOpenOrder(false);
    setProductText("");
    setUserText("");
    setLoading(false);
    setParcel("1");
    setOrderPaymentType("");
  }, [orderItems]);

  const [createOrder] = useCreateOrderMutation();
  const [createOrderItem] = useCreateOrderItemMutation();
  const [updateProduct] = useUpdateProductQuantityMutation();
  const [createSingleOrder] = useCreateSingleOrderMutation();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      if (orderType) {
        try {
          if (orderValueRef.current) {
            const totalOrder = parseFloat(orderValueRef?.current.value);

            if (!orderPaymentType || orderPaymentType === "Selecione") {
              throw new CustomError("Selecione uma forma de pagamento");
            }

            console.log(orderPaymentType);

            await createSingleOrder({
              variables: {
                total: totalOrder,
                orderValue: totalOrder,
                stripeCheckout: uuid(),
                userEmail: order.user.email,
                userId: order.user.id,
                parcel: parseInt(parcel),
                paymentType: orderPaymentType,
              },
            });

            orderValueRef.current.value = "";
            setUserText("");
            toast.success("Pedido de Ordem avulsa criada com sucesso!");
            return;
          }
        } catch (error) {
          console.error("criando ordem avulsa", error);
          const err = catchError(error);
          toast.error(String(err?.message));
        } finally {
          setLoading(false);
          handleCloseOrder();
        }
      }

      const data = new FormData(event.currentTarget);
      const quantity = parseInt(String(data.get("quantity")));

      if (quantity <= 0) {
        toast.error("Quantidade precisa se no mínimo 1", { duration: 4000 });
        setLoading(false);
        return;
      }

      if (order?.product?.quantity - quantity < 0) {
        toast.error("Não ha em estoque quantidade de produtos suficientes", {
          duration: 4000,
        });
        setLoading(false);
        return;
      }

      let orderId = "";

      const totalOrder = order?.product?.price * quantity;
      const newTotal = totalOrder + total;

      setTotal(newTotal);

      const updatedQuantity = Number(order.product?.quantity) - quantity;

      try {
        if (!hasOpenOrder) {
          const newOrder = {
            total: newTotal,
            userId: order?.user?.id,
            itemQuantity: quantity,
            totalItem: newTotal,
            productId: order?.product.id,
            userEmail: String(order.user.email),
            paymentType: orderPaymentType,
            parcel: parseInt(parcel),
          };

          //console.log("adicionar ordem e pedido ", newOrder);
          setOrder(Object.assign(order, newOrder));

          const response = await createOrder({
            variables: newOrder,
          });

          if (!response?.data?.createOrder) {
            throw new Error("erro: resposta sem data");
          }
          const id = response.data.createOrder.id;

          setOrder({
            ...order,
            id,
          });

          orderId = response.data.createOrder.orderItems[0].id;

          const item = {
            id: orderId,
            name: order.product.name,
            quantity,
            total: newTotal,
            productId: order.product.id,
          };
          setOrderItems([...orderItems, item]);

          toast.success("Pedido aberto, item adicionado");
          setLoading(false);

          await updateProduct({
            variables: {
              id: newOrder.productId,
              quantity: updatedQuantity,
            },
          });

          setHasOpenOrder(true);

          return;
        } else {
          const newItem = {
            orderId: String(order.id),
            productId: order.product.id,
            quantity: quantity,
            itemTotal: totalOrder,
          };

          const response = await createOrderItem({
            variables: newItem,
          });

          const orderItemId = String(response.data?.createOrderItem?.id);
          const productId = order.product.id;

          const myItem = {
            id: orderItemId,
            name: `${order.product.name} ${order.product.color} ${order.product.size}`,
            quantity,
            total: totalOrder,
            productId,
          };

          await updateProduct({
            variables: {
              id: order.product.id,
              quantity: updatedQuantity,
            },
          });

          setOrderItems([...orderItems, myItem]);
          await updateTotalOrder();
        }
      } catch (error) {
        toast.error("Erro ao adicionar pedido");
        console.log("erro adicionar item ou criar criar pedido", error);
      } finally {
        setLoading(false);
        setProductText("");
      }
    },
    [
      orderType,
      order,
      total,
      orderPaymentType,
      createSingleOrder,
      parcel,
      handleCloseOrder,
      hasOpenOrder,
      createOrder,
      orderItems,
      updateProduct,
      createOrderItem,
      updateTotalOrder,
    ]
  );

  const [removeItem] = useRemoveOrderItemMutation();
  const [removeOrderAndItems] = useRemoveOrderMutation();

  const handleRemoveOrderItem = useCallback(
    async (item: Props) => {
      setLoading(!loading);

      try {
        if (orderItems.length === 1) {
          await removeOrderAndItems({
            variables: {
              id: String(order.id),
            },
          });

          await updateProduct({
            variables: {
              id: item.productId,
              quantity: order.product.quantity,
            },
          });

          handleCloseOrder();
          return;
        } else {
          removeItem({
            variables: {
              id: item.id,
            },
          });

          await updateProduct({
            variables: {
              id: item.productId,
              quantity: order.product.quantity,
            },
          });
        }

        const filteredItems = orderItems.filter(
          orderItem => item.id !== orderItem.id
        );

        await updateTotalOrder();
        setOrderItems(filteredItems);
        setProductText("");

        toast.success("Removido Item e ou Pedido com sucesso!");
      } catch (error) {
        toast.error("Erro ao remover item");
      } finally {
        setLoading(false);
      }
    },
    [
      updateTotalOrder,
      handleCloseOrder,
      loading,
      order.id,
      order.product?.quantity,
      orderItems,
      removeItem,
      removeOrderAndItems,
      updateProduct,
    ]
  );

  const setTotalOrder = new Intl.NumberFormat("pt-BT", {
    style: "currency",
    currency: "BRL",
  }).format(orderItems.reduce((prev, acc) => prev + acc.total, 0));

  const handleChangeOrderType = useCallback(() => {
    if (orderItems.length >= 1) {
      toast.error("Remova os items do pedido em aberto ou finalize-o");

      return;
    }
    setOrderType(Boolean(orderTypeRef?.current?.checked));
  }, [orderItems.length]);

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <OrderSidebar />
        <main className="h-full w-full w-min[600px]">
          <Search />
          <div className="bg-gray-200 min-h-[65vh]">
            <div className="p-8">
              <Header title={"Novo Pedido"} loading={loading} />

              <div className="mt-4 text-gray-500">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={handleChangeOrderType}
                  ref={orderTypeRef}
                  checked={orderType}
                />
                <strong className="px-2">Ordem avulsa (sem produto)</strong>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 my-8 w-full"
              >
                <div className="relative justify-center">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md z-20 flex flex-col">
                    {usersSuggestions &&
                      usersSuggestions.map(suggestion => (
                        <button
                          className="text-left"
                          key={suggestion.id}
                          onClick={() => handleGetUserId(suggestion)}
                          type="button"
                        >
                          <li
                            onClick={() => handleGetUserId(suggestion)}
                            className=" rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors  px-4 border-b-gray-400 my-0.5"
                          >
                            {`${suggestion.name} - ${suggestion.email}`}
                          </li>
                        </button>
                      ))}
                  </ul>
                  <input
                    className="input px-2 w-full"
                    autoComplete="off"
                    placeholder="Nome..."
                    name="name"
                    required
                    onChange={e => onUserChangeHandler(e.target.value)}
                    value={userText}
                    onBlur={() => {
                      setTimeout(() => {
                        setUsersSuggestions([]);
                      }, 100);
                    }}
                  />
                </div>

                {!orderType && (
                  <>
                    <div className="relative">
                      <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md flex flex-col">
                        {suggestions &&
                          suggestions.map(suggestion => (
                            <button
                              className="text-left block"
                              key={suggestion.id}
                              onClick={() => handleGetProductId(suggestion)}
                              type="button"
                            >
                              <li
                                onClick={() => handleGetProductId(suggestion)}
                                className="rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors px-4 border-b-gray-400 my-0.5"
                              >
                                {`${suggestion.name} ${suggestion.color} ${suggestion.size}`}
                              </li>
                            </button>
                          ))}
                      </ul>
                      <input
                        className="input px-2 w-full"
                        placeholder="Produto.."
                        autoComplete="off"
                        required
                        name="product"
                        onChange={e => onProductChangeHandler(e.target.value)}
                        value={productText}
                        onBlur={() => {
                          setTimeout(() => {
                            setSuggestions([]);
                          }, 100);
                        }}
                      />
                    </div>
                    <input
                      className="input px-2"
                      placeholder="Quantidade"
                      type="number"
                      name="quantity"
                      required
                    />
                  </>
                )}

                {orderType && (
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-[1rem]  left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 text-xs font-bold">
                        R$
                      </span>
                    </div>
                    <input
                      className="input input-price w-full"
                      placeholder="Valor da compra ex: 780,99"
                      type="number"
                      name="value"
                      step="0.01"
                      min="0"
                      required
                      ref={orderValueRef}
                    />
                  </div>
                )}
                <OrderItemFooter
                  orderPaymentType={orderPaymentType}
                  setOrderPaymentType={setOrderPaymentType}
                  setParcel={setParcel}
                  orderType={orderType}
                />

                <div className="flex flex-row gap-4">
                  <Button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary btn-md w-24"
                  >
                    Adicionar
                  </Button>
                </div>
              </form>
              {orderItems.length !== 0 && (
                <>
                  <div className="py-8 px-2 bg-gray-100 rounded-xl">
                    <div className="flex flex-row items-center">
                      <div className="mr-4 w-6"></div>
                      <div className="grid grid-cols-4 gap-2 text-sm w-full text-gray-600">
                        <span className="col-span-2 block font-bold">
                          Produto
                        </span>
                        <span className="text-center font-bold">
                          Quantidade
                        </span>
                        <span className="text-right px-4 font-bold">Total</span>
                      </div>
                    </div>
                    {orderItems.map(item => (
                      <ProductItem
                        key={item.id}
                        itemProps={item}
                        removeItem={() => handleRemoveOrderItem(item)}
                      />
                    ))}
                    <div className="col-span-1 text-blue-400 flex text-end items-center px-4">
                      <strong className="w-full text-end ">
                        {setTotalOrder}
                      </strong>
                    </div>
                  </div>
                  <Button
                    className="btn btn-outline btn-md w-24 mt-4"
                    onClick={handleCloseOrder}
                    disabled={loading}
                  >
                    Finalizar
                  </Button>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Create;
