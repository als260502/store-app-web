import { FormEvent, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Button } from "../../components/Button";
import {
  Category,
  Product,
  useCreateOrderItemMutation,
  useCreateOrderMutation,
  useGetProductsGreaterThanZeroQuery,
  useGetStoreUsersQuery,
  useRemoveOrderItemMutation,
  useRemoveOrderMutation,
  useUpdateProductQuantityMutation,
} from "../../graphql/generated";
import toast, { Toaster } from "react-hot-toast";
import {
  ProductItem,
  Props,
} from "../../components/OrderComponents/ProductItem";

type OrderProps = {
  id?: string;
  user: StoreUser;
  product: Product;
  total: number;
};

type StoreUser = {
  id: string;
  name: string;
  nickname: string;
  email: string;
};

type Sugestion = {
  id: string;
  categories: Category[];
  name: string;
  color: string[];
  size: string[];
  price: number;
  quantity: number;
};

const Create: NextPage = () => {
  const [storeUser, setStoreUser] = useState<StoreUser[]>([]);
  const [userText, setUserText] = useState("");
  const [usersSugestions, setUsersSugestions] = useState<
    StoreUser[] | undefined
  >([]);

  const [products, setProducts] = useState<Product[]>([]);
  const [productText, setProductText] = useState("");
  const [sugestions, setSugestions] = useState<Sugestion[] | undefined>([]);

  const [order, setOrder] = useState<OrderProps>({} as OrderProps);
  const [orderItems, setOrderItems] = useState<Props[]>([]);

  const [total, setTotal] = useState(0);

  const { data: productData, refetch: refetchProduct } =
    useGetProductsGreaterThanZeroQuery();

  const { data: userData } = useGetStoreUsersQuery();

  useEffect(() => {
    setProducts(Object.assign(products, productData?.products));

    setStoreUser(Object.assign(storeUser, userData?.storeUsers));
  }, [productData?.products, products, storeUser, userData?.storeUsers]);

  const [loading, setLoading] = useState(false);

  const resetOrder = useCallback(() => {
    setProductText("");
    refetchProduct();
    setLoading(false);
  }, [refetchProduct]);

  const onUserChangeHandler = useCallback(
    (text: string) => {
      if (text.length > 3) {
        const regex = new RegExp(`${text}`, "gi");

        const userFiltered = storeUser?.filter(user => {
          return (
            regex.test(user.name) ||
            regex.test(String(user.nickname)) ||
            regex.test(String(user?.email))
          );
        });

        setUsersSugestions(userFiltered);
      } else {
        setUsersSugestions([]);
      }
      setUserText(text);
    },
    [storeUser]
  );

  const onProductChangeHandler = useCallback(
    (text: string) => {
      if (text.length > 3) {
        const regex = new RegExp(`${text}`, "gi");

        const userFiltered = products?.filter(
          product =>
            (product.quantity > 0 && regex.test(product.name)) ||
            (product.quantity > 0 && regex.test(product.slug))
        );

        const newProduct = userFiltered?.map(product => {
          const newColor = product.color.map(c => c.name);
          const newSize = product.size.map(s => s.name);

          return {
            id: product.id,
            categories: product.categories,
            name: product.name,
            color: newColor,
            size: newSize,
            price: product.price,
            quantity: product.quantity,
          };
        });

        setSugestions(newProduct);
      } else {
        setSugestions([]);
      }
      setProductText(text);
    },
    [products]
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

  const handleGetProductId = useCallback(
    (product: Product) => {
      setProductText(`${product.name} ${product.color} ${product.size}`);
      const newOrder = {
        product,
      };

      setOrder(Object.assign(order, newOrder));
    },
    [order]
  );

  const handleCloseOrder = useCallback(() => {
    setOrder({
      ...order,
      id: undefined,
    });
    setOrderItems([]);
    setUserText("");
    setProductText("");
    setLoading(false);
  }, [order]);

  const [createOrder] = useCreateOrderMutation();
  const [createOrderItem] = useCreateOrderItemMutation();
  const [updateProduct] = useUpdateProductQuantityMutation();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      const data = new FormData(event.currentTarget);
      const quantity = parseInt(String(data.get("quantity")));

      if (quantity <= 0) {
        toast.error("Quantidade precisa se no minimo 1", { duration: 4000 });
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
        if (!order.id) {
          const newOrder = {
            total: newTotal,
            userId: order?.user?.id,
            itemQuantity: quantity,
            totalItem: newTotal,
            productId: order?.product.id,
            userEmail: String(order.user.email),
          };

          console.log("adicionar ordem e pedido ", newOrder);

          setOrder(Object.assign(order, newOrder));

          //console.log(newOrder);

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

          return;
        } else {
          const newItem = {
            orderId: String(order.id),
            productId: order.product.id,
            quantity: quantity,
            itemTotal: totalOrder,
          };

          console.log("adicionar item", newItem);

          const response = await createOrderItem({
            variables: newItem,
          });

          const oderItemId = String(response.data?.createOrderItem?.id);
          const productId = order.product.id;

          const myItem = {
            id: oderItemId,
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
        }
      } catch (error) {
        toast.error("Erro ao adicionar pedido");
        console.log("erro adicionar item ou criar criar pedido", error);
      } finally {
        setLoading(false);
        refetchProduct();
        setProductText("");
      }
    },
    [
      createOrder,
      createOrderItem,
      order,
      orderItems,
      refetchProduct,
      total,
      updateProduct,
    ]
  );

  const [removeItem] = useRemoveOrderItemMutation();
  const [removeOrderAndItems] = useRemoveOrderMutation();

  const hadleRemoveOrderItem = useCallback(
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

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          {/* <Search /> */}
          <div className="bg-gray-200 min-h-[60vh]">
            <div className="p-8">
              <Header title={"Novo Pedido"} loading={loading} />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 my-8 w-full"
              >
                <div className="relative justify-center">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md z-20 flex flex-col">
                    {usersSugestions &&
                      usersSugestions.map(sugestion => (
                        <button
                          className="text-left"
                          key={sugestion.id}
                          onClick={() => handleGetUserId(sugestion)}
                          type="button"
                        >
                          <li className=" rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors  px-4 border-b-gray-400 my-0.5">
                            {`${sugestion.name} - ${sugestion.email}`}
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
                        setUsersSugestions([]);
                      }, 100);
                    }}
                  />
                </div>

                <div className="relative">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md flex flex-col">
                    {sugestions &&
                      sugestions.map(sugestion => (
                        <button
                          className="text-left block"
                          key={sugestion.id}
                          onClick={() => handleGetProductId(sugestion)}
                          type="button"
                        >
                          <li className="rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors px-4 border-b-gray-400 my-0.5">
                            {`${sugestion.name} ${sugestion.color} ${sugestion.size}`}
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
                        setSugestions([]);
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
                        removeItem={() => hadleRemoveOrderItem(item)}
                      />
                    ))}

                    <div className="w-full text-blue-400 flex justify-end px-4 mt-4">
                      <strong>{setTotalOrder}</strong>
                    </div>
                  </div>
                  <Button
                    className="btn btn-outline btn-md w-24 mt-4"
                    onClick={() => handleCloseOrder}
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
