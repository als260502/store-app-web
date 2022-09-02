import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DesktopMenu = ({ children }: Props) => {
  return <div className="desktop hidden md:flex ">{children}</div>;
};
