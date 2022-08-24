import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button";
import { useCompany } from "../context/CompanyContext";

const Home: NextPage = () => {
  const { company } = useCompany();
  const logo = String(company?.logoUrl);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center text-gray-600">
      <div className="w-[400px] bg-gray-200 bg-opacity-75 h-[500px] rounded-md p-8">
        <div className="flex flex-col items-center w-full">
          <div className="w-32 h-32 rounded-full flex justify-center items-stretch overflow-hidden border border-blue-400 shadow-xl">
            <img src={logo} alt="Logo" />
          </div>
          <header className="text-2xl mt-4 font-bold">{company?.name}</header>
        </div>

        <div className="w-full h-[200px] rounded-md mt-6 p-2">
          <div className="space-x-2 flex flex-row items-center justify-center">
            <Link href="/users/create">
              <a>
                <Button className="btn btn-primary btn-xs w-20">
                  Cadastros
                </Button>
              </a>
            </Link>
            <Link href="/categories/create">
              <a>
                <Button className="btn btn-primary btn-xs w-20">
                  Produtos
                </Button>
              </a>
            </Link>
            <Link href="/orders/create">
              <a>
                <Button className="btn btn-primary btn-xs w-20">Pedidos</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
