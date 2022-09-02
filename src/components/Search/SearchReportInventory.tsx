/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useCallback, useState } from "react";
import { useGetAllProductsLazyQuery } from "../../graphql/generated";
import { Button } from "../Button";

type Props = {
  handleSearch: (text: string) => void;
};

export const SearchReportInventory = ({ handleSearch }: Props) => {
  return (
    <div className="h-16 bg-gray-300 px-4">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="h-8 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row w-full gap-2 md:text-xl px-8 md:px-0">
            <MagnifyingGlass color="#323238" />
            <div className="w-full border-b-[1px] border-b-gray-400">
              <input
                className="px-1 bg-transparent focus:outline-none "
                placeholder="Buscar..."
                onChange={e => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
