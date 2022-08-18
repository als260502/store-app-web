import { memo, useRef } from "react";
import { Button } from "../Button";

import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

type Props = {
  id: string;
  total: number;
  createdAt: string;
  orderValue: number;
};

export type PaymentItemProps = {
  paymentItem: Props[];
};

const PaymentItemBase = ({ paymentItem }: PaymentItemProps) => {
  const orderIdRef = useRef<HTMLInputElement>(null);

  function teste() {
    console.log(orderIdRef?.current?.value);
  }

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

        <div className="space-y-2">
          {paymentItem &&
            paymentItem.map(item => (
              <div key={item.id}>
                <div className="px-2 grid grid-cols-4 gap-2 text-sm w-full items-center text-gray-600">
                  <span className="font-bold flex items-center">
                    <Button
                      className="btn btn-xs btn-outline w-16"
                      onClick={teste}
                    >
                      Pagar
                    </Button>
                    <input
                      type="hidden"
                      value={item.id}
                      name="orderId"
                      ref={orderIdRef}
                    />
                  </span>
                  <span className="text-center ">
                    {DateFormated(item.createdAt)}
                  </span>
                  <span className="text-right font-bold text-blue-600">
                    {totalFormated(item.orderValue)}
                  </span>
                  <span className="text-right px-4 font-bold text-red-600">
                    {totalFormated(item.total)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export const PaymentItem = memo(PaymentItemBase);
