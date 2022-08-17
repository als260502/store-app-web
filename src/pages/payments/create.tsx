import { FormEvent, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";

import { useOrder } from "../../hooks/useOrders";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Button } from "../../components/Button";
import {
  Product,
  useCreateOrderItemMutation,
  useCreateOrderMutation,
  useGetOrdersByStoreUserIdQuery,
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
import { Search } from "../../components/Search";
import { PaymentItemContainer } from "../../components/PaymentComponents/PaymentItemContainer";

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

const Create: NextPage = () => {
  const [storeUser, setStoreUser] = useState<StoreUser[]>([]);
  const [userText, setUserText] = useState("");
  const [usersSuggestions, setUsersSuggestions] = useState<
    StoreUser[] | undefined
  >([]);

  const [order, setOrder] = useState<OrderProps>({} as OrderProps);
  const [orderItems, setOrderItems] = useState<Props[]>([]);

  const [total, setTotal] = useState(0);
  const { data: userData } = useGetStoreUsersQuery();

  const { data: ordersData } = useGetOrdersByStoreUserIdQuery({
    variables: {
      id: order.user?.id,
    },
  });

  console.log(ordersData);

  useEffect(() => {
    setStoreUser(Object.assign(storeUser, userData?.storeUsers));
  }, [storeUser, userData?.storeUsers]);

  const [loading, setLoading] = useState(false);

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

        setUsersSuggestions(userFiltered);
      } else {
        setUsersSuggestions([]);
      }
      setUserText(text);
    },
    [storeUser]
  );

  const handleGetUserId = useCallback(
    async (user: StoreUser) => {
      setUserText(user.name);

      try {
        const newOrder = {
          user,
        };

        setOrder(Object.assign(order, newOrder));
      } catch (error) {
        console.error("handleGetUserId", error);
      }
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
        toast.error("Quantidade precisa se no mínimo 1", { duration: 4000 });
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
        }
      } catch (error) {
        toast.error("Erro ao adicionar pedido");
        console.log("erro adicionar item ou criar criar pedido", error);
      } finally {
        setLoading(false);
      }
    },
    [createOrder, createOrderItem, order, orderItems, total, updateProduct]
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
          <Search />
          <div className="bg-gray-200 min-h-[60vh]">
            <div className="p-8">
              <Header title={"Pagamento"} loading={loading} />

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
                          <li className=" rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors  px-4 border-b-gray-400 my-0.5">
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

                <input
                  className="input px-2"
                  placeholder="Valor do pagamento"
                  type="number"
                  name="payment"
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
              <PaymentItemContainer />
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Create;
