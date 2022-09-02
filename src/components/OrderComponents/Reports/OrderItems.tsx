/* eslint-disable no-unused-vars */
import classNames from "classnames";
import Link from "next/link";
import { ArrowElbowDownRight, Spinner } from "phosphor-react";
import React from "react";
import { dateFormated } from "@utils/formatDate";

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
    <div className="text-gray-400 mt-4 text-xs md:text-sm">
      <div className="grid grid-cols-3 md:grid-cols-6 px-2">
        <span className="col-span-1 md:col-span-2">Nome</span>
        <span className="col-span-1 hidden md:flex">Data</span>
        <span className="col-span-1 hidden md:flex">Total</span>
        <span className="col-span-1 hidden md:flex">Em aberto</span>
      </div>
      <div className="px-2 py-4 mt-2 border w-full min-h-[350px]  bg-gray-100">
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Spinner size={24} className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-6 px-1">
            {currentRegisters?.map(order => (
              <React.Fragment key={order.id}>
                <span className="col-span-1 md:col-span-2 flex flex-col border-b-[1px] border-gray-300 ">
                  <strong className="">{order?.storeUser?.name}</strong>
                  <strong className="hidden md:flex">{order.userEmail}</strong>
                </span>
                <span
                  className={classNames(
                    "col-span-1 md:flex items-center border-b-[1px] border-gray-300 font-bold hidden "
                  )}
                >
                  {dateFormated(order.createdAt)}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 hidden md:flex items-center text-blue-500 font-bold"
                  )}
                >
                  {formatMonetaryValues(order.orderValue)}
                </span>
                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 flex text-red-500 items-center  font-bold"
                  )}
                >
                  {formatMonetaryValues(order.total)}
                </span>

                <span
                  className={classNames(
                    "col-span-1 border-b-[1px] border-gray-300 flex text-blue-500 items-center justify-center font-bold"
                  )}
                >
                  <Link href={`/orders/edit?orderId=${order.id}`}>
                    <a className="transition-all ease-in-out hover:scale-125 duration-300 hover:text-blue-900">
                      <ArrowElbowDownRight />
                    </a>
                  </Link>
                </span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
