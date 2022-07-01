import { NextPage } from "next";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { CreateComponent } from "../../components/User/Create";

const Create: NextPage = () => {
  return (
    <div className="lg:w-[1200px] md:w-[600px] h-full lg:mx-auto md:mx-[5%] items-center mt-20 justify-center p-4 ">
      <div className="lg:w-full md:w-[600px]   flex flex-row bg-gray-400">
        <Sidebar />

        <main className="h-full w-full">
          <Search />
          <CreateComponent />
        </main>
      </div>
    </div>
  );
};

export default Create;
