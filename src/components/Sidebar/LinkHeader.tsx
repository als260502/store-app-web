import { ReactNode } from "react";

type Props = {
  header: string;
  children: ReactNode;
};
export const SidebarHeader = ({ header, children }: Props) => {
  return (
    <div className="my-4 px-4 flex flex-col gap-2">
      <div className="w-full border-b-2 text-gray-500">
        <h2 className="text-sm font-bold">{header}</h2>
      </div>
      {children}
    </div>
  );
};
