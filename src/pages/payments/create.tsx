import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  GetOrdersByStoreUserIdQuery,
  useGetOrdersByStoreUserIdLazyQuery,
  useGetStoreUsersQuery,
  useUpdateOrderByIdMutation,
} from "../../graphql/generated";
import toast, { Toaster } from "react-hot-toast";

import { Search } from "../../components/Search";
import { PaymentItem } from "../../components/PaymentComponents/PaymentItem";
import { CreditCard, Wallet } from "phosphor-react";
import { catchError, CustomError } from "../../utils/errorHandle";
import { SidebarHeader } from "../../components/Sidebar/LinkHeader";
import { SidebarLink } from "../../components/Sidebar/SidebarLink";

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

  const [getOrders, { refetch }] = useGetOrdersByStoreUserIdLazyQuery();

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

  const [updateOrder, { loading }] = useUpdateOrderByIdMutation();
  const handleUpdateOrderValue = useCallback(
    async (id: string) => {
      const orderId = id;

      try {
        if (!paymentValue)
          throw new CustomError("Valor do pagamento nao pode estar vazio");

        let itemValue = 0;
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const itemFiltered = ordersData?.orders?.filter(item => {
          if (item.id === orderId) {
            itemValue = item.total;
          }
        });

        const newValue = itemValue - parseFloat(paymentValue);

        if (newValue < 0)
          throw new CustomError("Erro: Pagamento maior do que o valor devido");

        await updateOrder({
          variables: {
            orderId,
            total: newValue,
          },
        });

        const { data } = await refetch();

        setOrdersData(data);
      } catch (err) {
        toast.error(String(catchError(err)?.message));
      } finally {
        setPaymentValue("");
      }
    },
    [ordersData?.orders, paymentValue, refetch, updateOrder]
  );

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar>
          <SidebarHeader header="Produtos">
            <SidebarLink
              linkUrl="/orders/create"
              linkName="Novo Pedido"
              icon={<CreditCard size={18} />}
            />
            <SidebarLink
              linkUrl="/payments/create"
              linkName="Pagamento"
              icon={<Wallet size={18} />}
            />

            <SidebarLink linkUrl="/categories/create" linkName="Produtos" />
            <SidebarLink linkUrl="/users/create" linkName="Cadastros" />
          </SidebarHeader>
        </Sidebar>

        <main className="h-full w-full w-min[600px]">
          <Search />
          <div className="bg-gray-200 min-h-[65vh]">
            <div className="p-8 ">
              <Header title={"Pagamento"} loading={loading} />

              <div className="flex flex-col gap-2 my-8 w-full">
                <div className="relative justify-center">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md z-20 flex flex-col">
                    {usersSuggestions &&
                      usersSuggestions.map(suggestion => (
                        <button
                          className="text-left text-gray-800"
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
                    className="input px-2 w-full text-gray-400"
                    autoComplete="off"
                    placeholder="Nome do do pagador..."
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
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-[1rem]  left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-xs font-bold">R$</span>
                  </div>
                  <input
                    className="input input-price w-full"
                    placeholder="Valor do pagamento ex: 196,90"
                    type="number"
                    name="payment"
                    step="0.01"
                    min="0"
                    onChange={e => setPaymentValue(e.target.value)}
                    value={paymentValue}
                  />
                </div>
              </div>
              {ordersData && (
                <PaymentItem
                  paymentItem={ordersData?.orders}
                  loading={loading}
                  handleUpdateOrderValue={handleUpdateOrderValue}
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
