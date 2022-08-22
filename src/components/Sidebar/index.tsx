import { ReactNode } from "react";
import { CaretDown } from "phosphor-react";

type Props = {
  children: ReactNode;
};

/* eslint-disable @next/next/no-img-element */
import { useCompany } from "../../context/CompanyContext";
export const Sidebar = ({ children }: Props) => {
  const { company } = useCompany();
  const logo = company?.logoUrl ? company.logoUrl : "/img/loading.gif";
  return (
    <aside className="">
      <div className="h-full w-[150px] md:w-[200px] bg-gray-100 py-8 px-2 flex flex-col border-r-2 border-gray-900 border-opacity-25 ">
        <div className="flex flex-col items-center pb-8">
          <div className="w-28 flex items-center justify-center rounded-full overflow-hidden border border-blue-400 shadow-xl">
            <img src={logo} alt="Logo" />
          </div>
          <div className="py-0.5 mt-2 flex flex-row gap-1 items-center">
            <span className="text-sm font-bold text-gray-500">
              Tião Calçados
            </span>
            <CaretDown size={14} color="#323238" />
          </div>
        </div>

        {children}
      </div>
    </aside>
  );
};
