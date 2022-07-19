import { NextPage } from "next";
import { Toaster } from "react-hot-toast";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

const Create: NextPage = () => {
  const handleCreateVariant = () => {
    console.log("variant");
  };
  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <Sidebar />

          <main className="w-full h-full min-w-[600px]">
            <div className="bg-gray-200 min-h-[60vh] ">
              <div className="p-8">
                <div>
                  <Header title="Variantes - Cor/Tamanho " />
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <form
                  onSubmit={handleCreateVariant}
                  className="mt=4 flex flex-col gap-2"
                ></form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Create;
