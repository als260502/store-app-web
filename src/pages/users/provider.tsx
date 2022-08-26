import { NextPage } from "next";
import { Search } from "../../components/Search";
import { CreateComponent } from "../../components/Provider/CreateComponent";
import { UserSidebar } from "../../components/Sidebar/User";

const Provider: NextPage = () => {
  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <UserSidebar />
        <main className="min-h-[65vh] w-full w-min[600px]">
          <Search />
          <CreateComponent />
        </main>
      </div>
    </div>
  );
};

export default Provider;
