import { NextPage } from "next";
import { useRef } from "react";

import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { OrderSidebar } from "@components/Sidebar/order";

import { Toaster } from "react-hot-toast";
import { useOrder } from "@context/OrderContext";
import { OrderListItem } from "@components/OrderComponents/OrderListItem";

const Add: NextPage = () => {
  const { products, categories, cart, filterProducts } = useOrder();

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex  md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <OrderSidebar />
        <main className="w-full">
          <Search />
          <div className="bg-gray-200 h-screen">
            <div className="p-8">
              <Header title={"Novo Pedido"} />

              <select
                name="category"
                className="input"
                onChange={e => filterProducts(e.target.value)}
              >
                {categories?.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <div className="bg-gray-200 w-full ">
                <ul className="w-full my-4 bg-gray-100 text-gray-400 p-2 text-xs md:text-base">
                  <li className="grid grid-cols-5">
                    <strong className="col-span-1"></strong>
                    <strong className="col-span-2">Produto</strong>
                    <strong className="col-span-1 ">Qtd</strong>
                    <strong className="col-span-1 text-center">Estoque</strong>
                  </li>
                  {products &&
                    products.map(product => (
                      <OrderListItem key={product.id} product={product} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Add;
