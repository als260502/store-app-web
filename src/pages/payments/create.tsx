import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { NextPage } from "next";

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
import { Props } from "../../components/OrderComponents/ProductItem";
import { Search } from "../../components/Search";
import { PaymentItem } from "../../components/PaymentComponents/PaymentItem";

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

  const orderPaymentRef = useRef<HTMLInputElement>(0);

  const [order, setOrder] = useState<OrderProps>({} as OrderProps);
  const [orderItems, setOrderItems] = useState<Props[]>([]);

  const [total, setTotal] = useState(0);
  const { data: userData, refetch: refetchUser } = useGetStoreUsersQuery();

  const { data: ordersData, refetch: refetchOrders } =
    useGetOrdersByStoreUserIdQuery({
      variables: {
        id: order.user?.id,
      },
    });

  // console.log(ordersData);

  useEffect(() => {
    setStoreUser(Object.assign(storeUser, userData?.storeUsers));
    refetchUser();
    refetchOrders();
  }, [refetchOrders, refetchUser, storeUser, userData?.storeUsers]);

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

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    },
    []
  );

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
                  step="0.01"
                  min="0"
                  ref={orderPaymentRef}
                />

                <div className="flex flex-row gap-4">
                  {/* <Button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary btn-md w-24"
                  >
                    Procurar
                  </Button> */}
                </div>
              </form>
              {ordersData?.orders && (
                <PaymentItem paymentItem={ordersData?.orders} />
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
