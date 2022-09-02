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

  const [, { loading, refetch: getProducts }] = useGetAllProductsLazyQuery();

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
    <div className="relative w-full md:w-[41.8rem] h-16 bg-gray-300 px-8">
      <div className="flex flex-row gap-2 h-full w-full mx-2 items-center">
        <MagnifyingGlass size={20} color="#323238" />
        <div className="w-full border-b-[1px] border-b-gray-400">
          <input
            className="w-full px-1 block bg-transparent focus:outline-none"
            placeholder="buscar..."
            onChange={e => onChangeHandler(e.target.value)}
            value={text}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100);
            }}
          />
          <ul className="absolute w-[20rem]">
            {suggestions &&
              suggestions.map(suggestion => (
                <li key={suggestion.id} className="w-full">
                  <a
                    className="w-full"
                    onClick={() => setSearchData(suggestion)}
                  >
                    <div
                      onClick={() => setText("")}
                      className="bg-gray-300 font-bold z-10 cursor-pointer hover:bg-gray-500 transition-colors  md:w-[300px] px-4 border border-gray-400 border-t-0 my-1"
                    >
                      {`${suggestion.name}`}
                    </div>
                  </a>
                </li>
              ))}
          </ul>
          {loading && (
            <div className="absolute right-0 top-50 animate-spin">
              <CircleNotch size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
