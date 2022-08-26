import { CreditCard, Wallet } from "phosphor-react";
import { Sidebar } from "..";
import { SidebarHeader } from "../LinkHeader";
import { SidebarLink } from "../SidebarLink";

export const OrderSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader header="Pedidos|Pagamentos">
        <SidebarLink
          linkUrl="/orders/create"
          linkName="Novo Pedido"
          icon={<CreditCard size={18} />}
        />
        <SidebarLink
          linkUrl="/payments/create"
          linkName="Pagamento"
          icon={<Wallet size={18} />}
        />

        <SidebarLink linkUrl="/products/create" linkName="Produtos" />
        <SidebarLink linkUrl="/users/create" linkName="Cadastros" />
        <SidebarLink linkUrl="/reports/inventory" linkName="Relatórios" />
      </SidebarHeader>
    </Sidebar>
  );
};
