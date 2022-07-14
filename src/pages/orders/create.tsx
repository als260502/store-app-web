import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";

const Create: NextPage = () => {
  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          <Search />
          <div className="bg-gray-200 h-full">
            <div className="p-8">
              <Header title={"Novo Pedido"} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Create;
