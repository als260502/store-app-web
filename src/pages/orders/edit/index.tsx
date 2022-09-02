import { NextPage } from "next";
import { useRouter } from "next/router";

import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { ReportSidebar } from "@components/Sidebar/report";

import { useGetCompleteOrderByIdQuery } from "@graphql/generated";

const Edit: NextPage = () => {
  const router = useRouter();

  const { orderId } = router.query;

  const { data, loading } = useGetCompleteOrderByIdQuery({
    variables: {
      orderId: String(orderId),
    },
  });

  // const date = dateFormated(data?.order?.createdAt);

  const date = new Date(data?.order?.createdAt).toLocaleDateString();

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <ReportSidebar />

        <main className="bg-gray-200 w-full">
          <Search />

          <div className="px-8 h-[100vh] md:h-[40rem] my-4">
            <Header title="Alterar Pedido" loading={loading} />

            <div className="flex mt-8 text-gray-500v px-2 md:px-8 justify-between text-gray-500">
              <div className="flex flex-col ">
                <strong>{`${data?.order?.storeUser?.name} ${data?.order?.storeUser?.surname}`}</strong>
                <strong>{data?.order?.userEmail}</strong>
              </div>

              <div>
                <span className="flex flex-col font-bold">Data do pedido</span>
                <strong>{date}</strong>
              </div>
            </div>

            <div className="mt-8 px-2 md:px-8 py-4 rounded-md shadow-lg bg-gray-100">
              <ul className="">
                {data?.order?.orderItems.map(order => (
                  <li key={order.id}>
                    <span>{order.product?.name}</span>
                    <span>{order.product?.sellPrice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Edit;
