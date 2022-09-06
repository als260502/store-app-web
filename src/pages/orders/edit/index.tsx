import { NextPage } from "next";
import { useRouter } from "next/router";

import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { ReportSidebar } from "@components/Sidebar/report";

import {
  useGetCompleteOrderByIdQuery,
  useRemoveOrderMutation,
  useUpdateOrderByIdMutation,
} from "@graphql/generated";
import { formatCurrency } from "@utils/formatCurrency";
import { Button } from "@components/Button";
import { useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CustomError, catchError } from "@utils/errorHandle";

const Edit: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { orderId } = router.query;

  const { data, refetch } = useGetCompleteOrderByIdQuery({
    variables: {
      orderId: String(orderId),
    },
  });

  const [finishOrderById, { loading: load }] = useUpdateOrderByIdMutation();
  const handleFinishOrder = useCallback(
    async (orderId: string) => {
      setLoading(loading => !loading);
      try {
        const response = await refetch();
        console.log(data?.order?.total);
        if (response.data?.order?.total === 0) {
          throw new CustomError("pedido ja está finalizado");
        }

        await finishOrderById({
          variables: {
            orderId,
            total: 0,
          },
        });

        toast.success("Baixa do pedito realizada com sucesso!");
      } catch (error) {
        const erro = catchError(error);

        toast.error(String(erro?.message));

        console.error("erro ao baixar pedito", error);
      } finally {
        setLoading(loading => !loading);
      }
    },
    [data?.order?.total, finishOrderById, refetch]
  );
  const date = new Date(data?.order?.createdAt).toLocaleDateString();

  const [removeOrder] = useRemoveOrderMutation();

  const handleRemoveOrder = useCallback(
    async (orderId: string) => {
      setLoading(loading => !loading);
      try {
        await removeOrder({
          variables: {
            id: orderId,
          },
        });
        toast.success("Pedido removido com sucesso!");

        router.back();
      } catch (error) {
        const erro = catchError(error);
        toast.error(String(erro?.message));
        console.error("erro ao remover pedito", error);
      } finally {
        setLoading(loading => !loading);
      }
    },
    [removeOrder, router]
  );

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <ReportSidebar />

        <main className="bg-gray-200 w-full">
          <Search />

          <div className="px-2 md:px-8 h-[100vh] md:h-[40rem] my-4">
            <Header title="Detalhes do pedido" loading={loading} />

            <div className="flex mt-8 text-gray-500v px-1 md:px-8 justify-between text-gray-500 text-xs md:text-base">
              <div className="flex flex-col ">
                <strong>{`${data?.order?.storeUser?.name} ${data?.order?.storeUser?.surname}`}</strong>
                <strong>{data?.order?.userEmail}</strong>
              </div>

              <div>
                <span className="flex flex-col font-bold">Data do pedido</span>
                <strong>{date}</strong>
                <span className="flex flex-col font-semibold italic">
                  Forma de pagamento
                </span>
                <strong className="">{data?.order?.paymentType}</strong>

                <strong className="px-2">
                  {data?.order?.paymentType === "Crédito" ? (
                    <span className="">{data.order.parcel} parcelas</span>
                  ) : (
                    ""
                  )}
                </strong>
              </div>
            </div>

            <div className="mt-8 px-2 md:px-8 py-4 rounded-md shadow-lg bg-gray-100">
              <ul className="text-gray-500 text-xs md:text-base">
                <li className="grid grid-flow-col">
                  <strong className="">Produto</strong>
                  <strong className="text-start">Valor</strong>
                  <strong className="text-center">Quantidade</strong>
                  <strong className="text-right">Total</strong>
                </li>
                {data?.order?.orderItems.map(order => (
                  <li key={order.id} className="grid grid-cols-4">
                    <span className="col-span-1 text-start">
                      {order.product?.name}
                    </span>
                    <span className="col-span-1 text-start font-semibold text-blue-500">
                      {formatCurrency(order.product?.sellPrice)}
                    </span>
                    <span className="text-center col-span-1">
                      {order.quantity}
                    </span>
                    <span className="col-span-1 font-semibold text-red-500 text-right">
                      {formatCurrency(order.total)}
                    </span>
                  </li>
                ))}

                <li className="">
                  <strong className="block text-right text-red-700 mt-4">
                    {formatCurrency(data?.order?.orderValue)}
                  </strong>
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-row gap-4">
              <Button
                onClick={() => handleFinishOrder(String(data?.order?.id))}
                className="btn btn-primary btn-md w-24"
              >
                Baixar
              </Button>
              <Button
                onClick={() => handleRemoveOrder(String(data?.order?.id))}
                className="btn btn-primary btn-md w-24"
              >
                Excluir
              </Button>
              <Button
                onClick={router.back}
                className="btn btn-outline btn-md w-24"
              >
                Voltar
              </Button>
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Edit;
