/* eslint-disable no-unused-vars */
import classNames from "classnames";
import { Spinner } from "phosphor-react";
import { DateFormated } from "../../../utils/formatDate";

type User = {
  name: string;
  surname: string;
};
type OrderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt: any;
  id: string;
  parcel?: number | null | undefined;
  orderValue: number;
  paymentType?: string | null | undefined;
  total: number;
  userEmail?: string | null | undefined;
  storeUser?: User | null | undefined;
};
type Props = {
  formatMonetaryValues: (value: number) => string;
  currentRegisters?: OrderProps[];
  loading: boolean;
};

export const OrderItems = ({
  formatMonetaryValues,
  currentRegisters,
  loading,
}: Props) => {
  return (
    <div className="text-gray-400 mt-4">
      <div className="grid grid-cols-4 px-2">
        <span className="col-span-1">Nome</span>
        <span className="col-span-1">Data</span>
        <span className="col-span-1">Total</span>
        <span className="col-span-1">Em aberto</span>
      </div>
      <div className="px-2 py-4 mt-2 border w-[600px] bg-gray-100">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size={24} className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-4 px-1">
            {currentRegisters?.map(order => (
              <>
                <span
                  key={order.id}
                  className="col-span-1 flex flex-col border-b-[1px] border-gray-300 text-sm"
                >
                  <strong className="text-sm">{order.storeUser.name}</strong>
                  <strong className="text-xs">{order.userEmail}</strong>
                </span>
                <span
                  className={classNames(
                    "col-span-1 flex items-center border-b-[1px] border-gray-300 font-bold text-sm"
                  )}
                >
                  {DateFormated(order.createdAt)}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 flex items-center text-blue-500 font-bold"
                  )}
                >
                  {formatMonetaryValues(order.orderValue)}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 flex text-red-500 items-center font-bold"
                  )}
                >
                  {formatMonetaryValues(order.total)}
                </span>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
