import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="text-gray-50 w-full h-[100vh] flex items-center justify-center">
      <Link href={"/users/create"}>
        <Button className="btn btn-primary btn-xl w-28">Entrar</Button>
      </Link>
    </div>
  );
};

export default Home;
