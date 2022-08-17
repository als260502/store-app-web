import { memo } from "react";
import { Button } from "../Button";

const PaymentItemBase = () => {
  return (
    <>
      <div className="py-8 px-2 bg-gray-100 rounded-xl">
        <div className="flex flex-row items-center">
          <div className="mb-2 px-2 grid grid-cols-3 gap-2 text-sm w-full text-gray-600">
            <span className=" block font-bold">Selecione</span>
            <span className="text-center font-bold">Data da compra</span>
            <span className="text-right px-4 font-bold">Débito</span>
          </div>
        </div>

        <div>
          <div className="px-2 grid grid-cols-3 gap-2 text-sm w-full items-center text-gray-600">
            <span className="font-bold flex items-center">
              <Button value="21315" className="btn btn-xs btn-outline w-16">
                Pagar
              </Button>
            </span>
            <span className="text-center font-bold">19 de abril de 2020 </span>
            <span className="text-right px-4 font-bold">R$ 895,00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const PaymentItemContainer = memo(PaymentItemBase);
