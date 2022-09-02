import { NextPage } from "next";
import { Search } from "../../components/Search";
import { CreateComponent } from "../../components/User/create";
import { UserSidebar } from "../../components/Sidebar/User";

const Create: NextPage = () => {
  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="h-full flex md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <UserSidebar />

        <main className="w-full">
          <Search />
          <CreateComponent />
        </main>
      </div>
    </div>
  );
};

export default Create;
