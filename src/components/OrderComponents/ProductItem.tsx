/* eslint-disable react-hooks/exhaustive-deps */
import { XCircle } from "phosphor-react";
import { memo, useCallback, useMemo } from "react";

export type Props = {
  id: string;
  name: string;
  quantity: number;
  total: number;
};

export type ItemProps = {
  itemProps: Props[];
};

const ProductItemBase = ({ itemProps }: ItemProps) => {
  const totalFormated = (value: number) => {
    return new Intl.NumberFormat("pt-BT", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="py-8 px-2 bg-gray-100 rounded-xl">
      <div className="flex flex-row items-center">
        <div className="mr-4 w-6"></div>
        <div className="grid grid-cols-4 gap-2 text-sm w-full text-gray-600">
          <span className="col-span-2 block font-bold">Produto</span>
          <span className="text-center font-bold">Quantidade</span>
          <span className="text-right px-4 font-bold">Total</span>
        </div>
      </div>

      {itemProps.map(item => (
        <div key={item.id} className="flex flex-row items-center my-4">
          <button className="mr-4 w-6 h-6 rounded-full transition-colors ease-in-out duration-200 hover:text-gray-200 text-red-400 hover:bg-gray-500 shadow-sm bg-gray-300 text-center flex items-center justify-center ">
            <XCircle size={20} />
          </button>
          <div className="grid grid-cols-4 gap-2 text-sm w-full text-gray-600">
            <span className="col-span-2">{item.name}</span>
            <span className="text-center">{item.quantity}</span>
            <span className="text-right px-4 text-red-700 font-bold">
              {totalFormated(item.total)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProductItem = memo(ProductItemBase);
