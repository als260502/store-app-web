/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import { useCompany } from "../context/CompanyContext";

const Home: NextPage = () => {
  const { company } = useCompany();
  console.log(company);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center text-gray-600">
      <div className="w-[400px] bg-gray-200 bg-opacity-75 h-[500px] rounded-md p-8">
        <div className="flex flex-col items-center w-full">
          <div className="w-36 rounded-full overflow-hidden border border-blue-400 shadow-xl">
            <img src={String(company?.logoUrl)} alt="Logo" />
          </div>
          <header className="text-2xl mt-4 font-bold">{company?.name}</header>
        </div>

        <div className="w-full h-[200px] rounded-md mt-6 p-2"></div>
      </div>
    </div>
  );
};

export default Home;
