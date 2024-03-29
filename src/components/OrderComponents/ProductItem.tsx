/* eslint-disable react-hooks/exhaustive-deps */
import { XCircle } from "phosphor-react";
import { memo } from "react";

export type Props = {
  id: string;
  name: string;
  quantity: number;
  total: number;
  productId: string;
};

export type ItemProps = {
  itemProps: Props;
  removeItem: () => Promise<void>;
};

const ProductItemBase = ({ itemProps, removeItem }: ItemProps) => {
  const totalFormated = (value: number) => {
    return new Intl.NumberFormat("pt-BT", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // const setTotalOrder = new Intl.NumberFormat("pt-BT", {
  //   style: "currency",
  //   currency: "BRL",
  // }).format(itemProps.reduce((prev, acc) => prev + acc.total, 0));

  return (
    <>
      <div key={itemProps.id} className="flex flex-row items-center my-4">
        <button
          className=" md:text-[5rem] mr-4 md:w-6 md:h-6 rounded-full transition-colors ease-in-out duration-200 hover:text-gray-200 text-red-400 hover:bg-gray-500 shadow-sm bg-gray-300 text-center flex items-center justify-center"
          onClick={removeItem}
        >
          <XCircle />
        </button>
        <div className="grid grid-cols-3 md:grid-cols-4 md:gap-2 text-xs md:text-base w-full text-gray-600">
          <span className="col-span-1 md:col-span-2">{itemProps.name}</span>
          <span className="text-center">{itemProps.quantity}</span>
          <span className="text-end md:px-4 text-red-700 font-bold">
            {totalFormated(itemProps.total)}
          </span>
        </div>
      </div>
    </>
  );
};

export const ProductItem = memo(ProductItemBase);
