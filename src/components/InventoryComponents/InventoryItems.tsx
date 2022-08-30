/* eslint-disable no-unused-vars */
import classNames from "classnames";
import { Spinner } from "phosphor-react";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  sellPrice: number;
  slug: string;
  quantity: number;
  description: string;
};
type Props = {
  formatMonetaryValues: (value: number) => string;
  quantityRedFlag: (quantity: number) => boolean;
  currentRegisters?: ProductProps[];
  loading: boolean;
};

export const InventoryItems = ({
  formatMonetaryValues,
  quantityRedFlag,
  currentRegisters,
  loading,
}: Props) => {
  return (
    <div className="text-gray-400 mt-4">
      <div className="grid grid-cols-4 px-2">
        <span className="col-span-2">Nome</span>
        <span className="col-span-1">Preço</span>
        <span className="col-span-1">Em estoque</span>
      </div>
      <div className="px-2 py-4 mt-2 border w-[600px] h-[350px] bg-gray-100">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size={24} className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-4 px-4 gap-1">
            {currentRegisters?.map(product => (
              <>
                <span
                  key={product.id}
                  className="col-span-2 border-b-[1px] border-gray-300"
                >
                  {product.name}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 font-bold"
                  )}
                >
                  {formatMonetaryValues(product.sellPrice)}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 text-center font-bold",
                    {
                      "bg-red-300 text-gray-600": quantityRedFlag(
                        product.quantity
                      ),
                    }
                  )}
                >
                  {product.quantity}
                </span>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
