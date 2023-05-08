import { AlignBottom, Money } from "phosphor-react";
import { Sidebar } from "..";
import { DesktopMenu } from "../DesktopMenu";
import { SidebarHeader } from "../LinkHeader";
import { MobileMenu } from "../MobileMenu";
import { SidebarLink } from "../SidebarLink";

export const ReportSidebar = () => {
  return (
    <Sidebar>
      <MobileMenu>
        <SidebarHeader header="Relatórios">
          <SidebarLink
            linkUrl="/reports/inventory"
            linkName="Estoque"
            icon={<AlignBottom size={18} />}
          />
          <SidebarLink
            linkUrl="/reports/order"
            linkName="Pedidos"
            icon={<Money size={18} />}
          />

          <SidebarLink linkName={"Cadastros"} linkUrl={"/users/create"} />
          <SidebarLink linkName={"Pedidos"} linkUrl={"/orders/add"} />
          <SidebarLink linkName={"Prodtos"} linkUrl={"/products/create"} />
        </SidebarHeader>
      </MobileMenu>
      <DesktopMenu>
        <SidebarHeader header="Relatórios">
          <SidebarLink
            linkUrl="/reports/inventory"
            linkName="Estoque"
            icon={<AlignBottom size={18} />}
          />
          <SidebarLink
            linkUrl="/reports/order"
            linkName="Pedidos"
            icon={<Money size={18} />}
          />

          <SidebarLink linkName={"Cadastros"} linkUrl={"/users/create"} />
          <SidebarLink linkName={"Pedidos"} linkUrl={"/orders/add"} />
          <SidebarLink linkName={"Prodtos"} linkUrl={"/products/create"} />
        </SidebarHeader>
      </DesktopMenu>
    </Sidebar>
  );
};
