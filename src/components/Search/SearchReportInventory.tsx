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
    <div className="h-16 bg-gray-300">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="h-8 w-full flex flex-row border-r-2 border-gray-400 items-center justify-between px-2 ">
          <div className="flex flex-row gap-2">
            <MagnifyingGlass size={20} color="#323238" />
            <div className="fixed mx-8">
              <input
                className="w-[600px] px-1 bg-transparent focus:outline-none border-b-[1px] border-b-gray-400"
                placeholder="buscar..."
                onChange={e => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
