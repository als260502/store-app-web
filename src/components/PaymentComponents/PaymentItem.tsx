/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { memo } from "react";
import { Button } from "../Button";

import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Toaster } from "react-hot-toast";

type Props = {
  id: string;
  total: number;
  createdAt: string;
  orderValue: number;
};

export type PaymentItemProps = {
  paymentItem: Props[] | undefined;
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  handleUpdateOrderValue: (id: string) => void;
  loading: boolean;
};

const PaymentItemBase = ({
  paymentItem,
  handleUpdateOrderValue,
  loading,
}: PaymentItemProps) => {
  const totalFormated = (value: number) => {
    return new Intl.NumberFormat("pt-BT", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const DateFormated = (date: string) => {
    const availableDateFormated = format(new Date(date), "dd'/'MM'/'yyyy", {
      locale: ptBr,
    });

    return availableDateFormated;
  };

  return (
    <>
      <div className="py-8 px-2 bg-gray-100 rounded-xl">
        <div className="flex flex-row items-center">
          <div className="mb-2 px-2 grid grid-cols-4 gap-2 text-sm w-full text-gray-600">
            <span className=" block font-bold">Pagar</span>
            <span className="text-center font-bold">Data da compra</span>
            <span className="text-right font-bold">Total</span>
            <span className="text-right px-4 font-bold">Débito</span>
          </div>
        </div>

        <ul className="space-y-2">
          {paymentItem &&
            paymentItem?.map(item => (
              <li key={item.id}>
                <div className="px-2 grid grid-cols-4 gap-2 text-sm w-full items-center text-gray-600">
                  <span className="font-bold flex items-center">
                    <Button
                      className="btn btn-xs btn-outline w-16"
                      onClick={() => handleUpdateOrderValue(item.id)}
                      name={item.id}
                      disabled={loading}
                    >
                      Pagar
                    </Button>
                  </span>
                  <span className="text-center font-bold text-gray-400">
                    {DateFormated(item.createdAt)}
                  </span>
                  <span className="text-right font-bold text-blue-600">
                    {totalFormated(item.orderValue)}
                  </span>
                  <span className="text-right px-4 font-bold text-red-600">
                    {totalFormated(item.total)}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export const PaymentItem = memo(PaymentItemBase);
