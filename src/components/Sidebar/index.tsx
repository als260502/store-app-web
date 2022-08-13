import Image from "next/image";
import Link from "next/link";
import {
  CaretDown,
  CopySimple,
  Palette,
  TShirt,
  UserCirclePlus,
  Wall,
  Wallet,
} from "phosphor-react";
/* eslint-disable @next/next/no-img-element */
import logo from "../../assets/logo-rounded.png";
export const Sidebar = () => {
  return (
    <aside className="">
      <div className="h-full w-[150px] md:w-[200px] bg-gray-100 py-8 px-2 flex flex-col border-r-2 border-gray-900 border-opacity-25 ">
        <div className="flex flex-col items-center pb-8">
          <Image
            className="w-20 rounded-full"
            src={logo}
            //src="https://github.com/als260502.png"
            alt="Avatar"
            width={64}
            height={64}
          />
          <div className="py-0.5 mt-2 flex flex-row gap-1 items-center">
            <span className="text-sm font-bold text-gray-500">
              Tião Calçados
            </span>
            <CaretDown size={14} color="#323238" />
          </div>
        </div>

        <div className="my-8 px-4 flex flex-col gap-2">
          <div className="w-full border-b-2 text-gray-500">
            <h2 className="text-sm font-bold">CADASTROS</h2>
          </div>

          <Link href="/users/create">
            <a className="flex flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300 ease-in-out">
              <UserCirclePlus size={20} color="#323238" />
              <span className="font-medium text-sm text-gray-500 ">
                Usuários
              </span>
            </a>
          </Link>
          <Link href="/categories/create">
            <a className="flex flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300">
              <CopySimple size={20} color="#323238" />
              <span className="py-1 font-medium text-sm text-gray-500">
                Categorias
              </span>
            </a>
          </Link>

          <Link href="/variants/create">
            <a className="flex flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300">
              <Palette size={20} color="#323238" />
              <span className="py-1 font-medium text-sm text-gray-500">
                Cor/Tamanho
              </span>
            </a>
          </Link>

          <Link href="/products/add">
            <a className="flex flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300">
              <TShirt size={20} color="#323238" />
              <span className="py-1 font-medium text-sm text-gray-500">
                Produtos
              </span>
            </a>
          </Link>

          <Link href="/orders/create">
            <a className="flex flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300">
              <Wallet size={20} color="#323238" />
              <span className="py-1 font-medium text-sm text-gray-500">
                Pedidos
              </span>
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};
