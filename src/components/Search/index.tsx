import { Bell, MagnifyingGlass } from "phosphor-react";
import { Button } from "../Button";

export const Search = () => {
  return (
    <div className="lg:w-full md:w-[600px] h-16 bg-gray-300">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="h-8 w-full flex flex-row border-r-2 border-gray-400 items-center justify-between px-2 ">
          <div className="flex flex-row gap-2">
            <MagnifyingGlass size={20} color="#323238" />
            <input
              className="lg:w-[600px] md:w-[300px] bg-transparent focus:outline-none"
              placeholder="buscar..."
            ></input>
          </div>
          <div className="relative">
            <span className="rounded-full w-3 absolute top-0 right-1 text-center text-[8px] bg-blue-700 text-gray-50">
              3
            </span>
            <Bell size="24" />
          </div>
        </div>

        <div className="w-[200px] flex items-center justify-center">
          <Button className="btn btn-primary btn-sm">Novo usuário</Button>
        </div>
      </div>
    </div>
  );
};
