/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useCallback, useState } from "react";
import { useGetAllProductsLazyQuery } from "../../graphql/generated";
import { Button } from "../Button";

interface SearchProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sellPrice: number;
  quantity: number;
}

type Props = {
  setSearchData: (product: SearchProps) => void;
};

export const SearchProduct = ({ setSearchData }: Props) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<SearchProps[]>([]);

  const [getProducts, { loading }] = useGetAllProductsLazyQuery();

  const onChangeHandler = useCallback(
    async (text: string) => {
      if (text.length > 3) {
        const response = await getProducts();
        const regex = new RegExp(`${text}`, "gi");

        const newUser = response.data?.products.filter(
          product =>
            regex.test(product.name) ||
            regex.test(product.description) ||
            regex.test(product.slug)
        );

        setSuggestions(Object.assign(suggestions, newUser));
      } else {
        setSuggestions([]);
      }
      setText(text);
    },
    [getProducts, suggestions]
  );

  return (
    <div className="h-16 bg-gray-300">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="h-8 w-full flex flex-row border-r-2 border-gray-400 items-center justify-between px-2 ">
          <div className="flex flex-row gap-2">
            <MagnifyingGlass size={20} color="#323238" />
            <div className="fixed mx-8">
              <input
                className="w-96 px-1 bg-transparent focus:outline-none border-b-[1px] border-b-gray-400"
                placeholder="buscar..."
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions([]);
                  }, 100);
                }}
              />
              {suggestions &&
                suggestions.map(suggestion => (
                  <a
                    key={suggestion.id}
                    onClick={() => setSearchData(suggestion)}
                  >
                    <div
                      onClick={() => setText("")}
                      className="bg-gray-300 relative lg:w-[600px] font-bold z-10 cursor-pointer hover:bg-gray-500 transition-colors  md:w-[300px] px-4 border border-gray-400 border-t-0 my-1"
                    >
                      {`${suggestion.name}`}
                    </div>
                  </a>
                ))}
              {loading && (
                <div className="absolute right-0 top-0 animate-spin">
                  <CircleNotch size={20} />
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            {/* <span className="rounded-full w-3 block absolute top-0 right-1 z-10 text-center text-[8px] bg-blue-700 text-gray-50">
              3
            </span>
            <Bell size="24" /> */}
          </div>
        </div>

        <div className="w-[200px] flex items-center justify-center">
          <Link href="/products/add">
            <a>
              <Button className="btn btn-primary btn-sm ">Novo Produto</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
