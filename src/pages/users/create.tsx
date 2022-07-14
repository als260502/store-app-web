import { NextPage } from "next";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { CreateComponent } from "../../components/User/create";

const Create: NextPage = () => {
  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          <Search />
          <CreateComponent />
        </main>
      </div>
    </div>
  );
};

export default Create;
