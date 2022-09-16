import { Browsers, Palette, Pencil, TShirt } from "phosphor-react";
import { Sidebar } from "..";
import { DesktopMenu } from "../DesktopMenu";
import { SidebarHeader } from "../LinkHeader";
import { MobileMenu } from "../MobileMenu";
import { SidebarLink } from "../SidebarLink";

export const ProductSidebar = () => {
  return (
    <Sidebar>
      <MobileMenu>
        <SidebarHeader header="Produtos">
          <SidebarLink
            linkUrl="/products/create"
            linkName="Novo produto"
            icon={<TShirt size={18} />}
          />
          <SidebarLink
            linkUrl="/categories/create"
            linkName="Categoria"
            icon={<Browsers size={18} />}
          />
          <SidebarLink
            linkUrl="/variants/create"
            linkName="Cor|Tamanho"
            icon={<Palette size={18} />}
          />

          <SidebarLink
            linkUrl="/products/edit"
            linkName="Editar produto"
            icon={<Pencil size={18} />}
          />

          <SidebarLink linkName={"Cadastros"} linkUrl={"/users/create"} />
          <SidebarLink linkName={"Pedidos"} linkUrl={"/orders/add"} />
          <SidebarLink linkUrl="/reports/inventory" linkName="Relatórios" />
        </SidebarHeader>
      </MobileMenu>

      <DesktopMenu>
        <SidebarHeader header="Produtos">
          <SidebarLink
            linkUrl="/products/create"
            linkName="Novo produto"
            icon={<TShirt size={18} />}
          />
          <SidebarLink
            linkUrl="/categories/create"
            linkName="Categoria"
            icon={<Browsers size={18} />}
          />
          <SidebarLink
            linkUrl="/variants/create"
            linkName="Cor|Tamanho"
            icon={<Palette size={18} />}
          />

          <SidebarLink
            linkUrl="/products/edit"
            linkName="Editar produto"
            icon={<Pencil size={18} />}
          />

          <SidebarLink linkName={"Cadastros"} linkUrl={"/users/create"} />
          <SidebarLink linkName={"Pedidos"} linkUrl={"/orders/add"} />
          <SidebarLink linkUrl="/reports/inventory" linkName="Relatórios" />
        </SidebarHeader>
      </DesktopMenu>
    </Sidebar>
  );
};
