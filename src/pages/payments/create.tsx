import { useCallback, useEffect, useRef, useState } from "react";
import { NextPage } from "next";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  GetOrdersByStoreUserIdQuery,
  useGetOrdersByStoreUserIdLazyQuery,
  useGetStoreUsersQuery,
} from "../../graphql/generated";
import { Toaster } from "react-hot-toast";

import { Search } from "../../components/Search";
import { PaymentItem } from "../../components/PaymentComponents/PaymentItem";

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

  const [paymentValue, setPaymentValue] = useState("");

  const [ordersData, setOrdersData] = useState<GetOrdersByStoreUserIdQuery>();
  const { data: userData, refetch: refetchUser } = useGetStoreUsersQuery();

  const [getOrders] = useGetOrdersByStoreUserIdLazyQuery();

  useEffect(() => {
    setStoreUser(Object.assign(storeUser, userData?.storeUsers));
    refetchUser();
  }, [refetchUser, storeUser, userData?.storeUsers]);

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
        setOrdersData(undefined);
      }
      setUserText(text);
    },
    [storeUser]
  );

  const handleGetUserId = useCallback(
    async (user: StoreUser) => {
      setUserText(user.name);

      try {
        const { data } = await getOrders({
          variables: {
            id: user.id,
          },
        });

        setOrdersData(data);
      } catch (error) {
        console.error("handleGetUserId", error);
      }
    },
    [getOrders]
  );

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          <Search />
          <div className="bg-gray-200 min-h-[60vh]">
            <div className="p-8">
              <Header title={"Pagamento"} />

              <div className="flex flex-col gap-2 my-8 w-full">
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
                  onChange={e => setPaymentValue(e.target.value)}
                  value={paymentValue}
                />
              </div>
              {ordersData?.orders.length !== 0 && (
                <PaymentItem
                  paymentItem={ordersData?.orders}
                  paymentValue={paymentValue}
                />
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
