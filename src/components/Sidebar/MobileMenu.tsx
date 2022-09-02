import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const MobileMenu = ({ children }: Props) => {
  return (
    <div className="mobile fixed block rounded-2xl shadow-lg w-48 md:hidden bg-gray-300 py-8 mt-2 z-30">
      {children}
    </div>
  );
};
