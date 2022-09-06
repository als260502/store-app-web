import { ReactNode, useCallback, useState } from "react";
import { CaretDown, List, ListPlus } from "phosphor-react";

type Props = {
  children: ReactNode;
};

/* eslint-disable @next/next/no-img-element */
import { useCompany } from "../../context/CompanyContext";
export const Sidebar = ({ children }: Props) => {
  const { company } = useCompany();
  const logo = company?.logoUrl ? company.logoUrl : "/img/loading.gif";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenCloseMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <aside className="">
      <div
        className="mobile text-gray-600 absolute md:hidden cursor-pointer z-20"
        onClick={handleOpenCloseMenu}
      >
        {isMobileMenuOpen ? (
          <>
            <List size={40} />
            {children}
          </>
        ) : (
          <ListPlus size={40} />
        )}
      </div>
      <div className="desktop h-full hidden md:flex">
        <div className="h-full w-[150px] md:w-[200px] bg-gray-100 py-8 px-2 flex flex-col border-r-2 border-gray-900 border-opacity-25 ">
          <div className="flex flex-col items-center pb-8">
            <div className="w-28 h-28 flex rounded-full justify-content overflow-hidden border border-blue-900 shadow-xl">
              <img src={logo} alt="Logo" />
            </div>
            <div className="py-0.5 mt-2 flex flex-row gap-1 items-center">
              <span className="text-sm font-bold text-gray-500">
                {company?.name}
              </span>
              <CaretDown size={14} color="#323238" />
            </div>
          </div>

          {children}
        </div>
      </div>
    </aside>
  );
};
