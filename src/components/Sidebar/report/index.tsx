import { AlignBottom } from "phosphor-react";
import { Sidebar } from "..";
import { SidebarHeader } from "../LinkHeader";
import { SidebarLink } from "../SidebarLink";

export const ReportSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader header="Relatórios">
        <SidebarLink
          linkUrl="/reports/inventory"
          linkName="Estoque"
          icon={<AlignBottom size={18} />}
        />

        <SidebarLink linkName={"Cadastros"} linkUrl={"/users/create"} />
        <SidebarLink linkName={"Pedidos"} linkUrl={"/orders/create"} />
        <SidebarLink linkName={"Prodtos"} linkUrl={"/products/create"} />
      </SidebarHeader>
    </Sidebar>
  );
};
