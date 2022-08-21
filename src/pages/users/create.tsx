import { NextPage } from "next";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { SidebarHeader } from "../../components/Sidebar/LinkHeader";
import { SidebarLink } from "../../components/Sidebar/SidebarLink";
import { CreateComponent } from "../../components/User/create";
import { UserCirclePlus } from "phosphor-react";

const Create: NextPage = () => {
  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar>
          <SidebarHeader header="Cadastro">
            <SidebarLink
              linkUrl="/users/create"
              linkName="Novo usuário"
              icon={<UserCirclePlus size={18} />}
            />

            <SidebarLink linkUrl="/categories/create" linkName="Produtos" />
            <SidebarLink linkUrl="/orders/create" linkName="Pedidos" />
          </SidebarHeader>
        </Sidebar>

        <main className="h-full w-full w-min[600px]">
          <Search />
          <CreateComponent />
        </main>
      </div>
    </div>
  );
};

export default Create;
