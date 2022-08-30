import { Storefront, UserCirclePlus } from "phosphor-react";
import { Sidebar } from "..";
import { SidebarHeader } from "../LinkHeader";
import { SidebarLink } from "../SidebarLink";

export const UserSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader header="Cadastro">
        <SidebarLink
          linkUrl="/users/create"
          linkName="usuário"
          icon={<UserCirclePlus size={18} />}
        />
        <SidebarLink
          linkUrl="/users/provider"
          linkName="Fornecedor"
          icon={<Storefront size={18} />}
        />

        <SidebarLink linkUrl="/products/create" linkName="Produtos" />
        <SidebarLink linkUrl="/orders/create" linkName="Pedidos" />
        <SidebarLink linkUrl="/reports/inventory" linkName="Relatórios" />
      </SidebarHeader>
    </Sidebar>
  );
};
