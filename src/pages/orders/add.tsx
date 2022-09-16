import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

import { Header } from "@components/Header";
import { Search } from "@components/Search";
import { OrderSidebar } from "@components/Sidebar/order";

import { Toaster } from "react-hot-toast";
import { useCallback } from "react";
import { useGetProductsByCategoryQuery } from "@graphql/generated";
import { MinusCircle, PlusCircle } from "phosphor-react";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sellPrice: number;
};

const Add: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const selectRef = useRef<HTMLSelectElement>(null);

  const { data: categoryData, refetch } = useGetProductsByCategoryQuery();

  useEffect(() => {
    const initialProducts: Product[] = [];
    categoryData?.categories.map(c => {
      return c.products.map(p => {
        const newProduct = {
          name: p.name,
          id: p.id,
          price: p.price,
          sellPrice: p.sellPrice,
          quantity: p.quantity,
        };
        initialProducts.push(newProduct);
      });
    });

    setProducts(initialProducts);
    setAllProducts(initialProducts);
  }, [categoryData?.categories]);

  const filterProducts = useCallback(() => {
    try {
      const id = selectRef.current?.value;

      if (id === "Selecione") {
        setProducts(allProducts);
        return;
      }

      const filteredCategory = categoryData?.categories.filter(
        category => category.id === id
      );

      if (filteredCategory) {
        const newProducts = filteredCategory[0].products.map(
          product => product
        );
        setProducts(newProducts);
      }
    } catch (error) {
      console.error(error);
    }
  }, [allProducts, categoryData?.categories]);

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
                onChange={filterProducts}
                ref={selectRef}
              >
                <option>Selecione</option>
                {categoryData?.categories.map(category => (
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
                      <li
                        key={product.id}
                        value={product.id}
                        className="grid grid-cols-5 py-1 my-1"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 col-span-1 text-center"
                        />

                        <span className="h-4 col-span-2 w-full">
                          {product.name}
                        </span>
                        <div className="flex flex-row items-center md:text-base gap-1 w-full text-xs ">
                          <MinusCircle className="cursor-pointer hover:text-gray-500 hover:scale-125 transition-all duration-200 ease-in-out" />
                          <span className="">100</span>
                          <PlusCircle className="cursor-pointer hover:text-gray-500 hover:scale-125 transition-all duration-200 ease-in-out" />
                        </div>
                        <span className="col-span-1 text-center">
                          {product.quantity}
                        </span>
                      </li>
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
