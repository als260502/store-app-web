import { Sidebar } from "phosphor-react";
import { Toaster } from "react-hot-toast";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

const Add = () => {
  const handleAddCategoriesAndVariants = () => {};

  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <Sidebar />

          <main className="h-full w-full w-min[600px]">
            <Search />
            <div className="bg-gray-200 h-full">
              <div className="p-8">
                <div>
                  <Header title="Novo produto" />
                </div>
                <form
                  className="mt-8 w-[550px] flex flex-col gap-4"
                  onSubmit={handleAddCategoriesAndVariants}
                >
                  <div className="flex flex-row gap-8 mt-4">
                    <Button
                      className="btn btn-primary btn-md w-24 "
                      type="submit"
                    >
                      Próximo
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Add;
