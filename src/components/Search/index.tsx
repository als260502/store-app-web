/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-var */
import { useCallback, useEffect, useState } from "react";
import {
  GetStoreUsersQuery,
  useGetStoreUsersQuery,
} from "../../graphql/generated";
import { Button } from "../Button";
import { Header } from "../Header";

interface SearchProps {
  email: "string";
  id: "string";
  name: "string";
  nickname: "string";
  orders: [];
  surname: "string";
  phones: "string";
}

export const Search = () => {
  const [users, setUsers] = useState<GetStoreUsersQuery>();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<SearchProps[]>([]);

  const { data } = useGetStoreUsersQuery();

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const onChangeHandler = useCallback(
    (text: string) => {
      if (text.length > 3) {
        const regex = new RegExp(`${text}`, "gi");

        const newUser = users?.storeUsers.filter(
          user =>
            regex.test(user.name) ||
            regex.test(user.surname) ||
            regex.test(String(user.email)) ||
            regex.test(String(user.nickname)) ||
            regex.test(`${user.name} ${user.surname}`) ||
            regex.test(`${user.phones}}`)
        );

        console.log(newUser);

        setSuggestions(Object.assign(suggestions, newUser));
      } else {
        setSuggestions([]);
      }
      setText(text);
    },
    [users, suggestions]
  );

  return (
    <div className="h-16 bg-gray-300">
      {/* <div className="w-full h-full flex flex-row items-center justify-between">
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
                suggestions.map((suggestion, i) => (
                  <>
                    <div
                      key={i}
                      className="bg-gray-300 relative lg:w-[600px] font-bold z-10 cursor-pointer hover:bg-gray-500 transition-colors  md:w-[300px] px-4 border border-gray-400 border-t-0 my-1"
                    >
                      {`${suggestion.name} ${suggestion.surname} - ${suggestion.nickname}`}
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className="relative">
            <span className="rounded-full w-3 block absolute top-0 right-1 z-10 text-center text-[8px] bg-blue-700 text-gray-50">
              3
            </span>
            <Bell size="24" />
          </div>
        </div>

        <div className="w-[200px] flex items-center justify-center">
          <Button className="btn btn-primary btn-sm">Novo usuário</Button>
        </div>
      </div> */}
    </div>
  );
};
