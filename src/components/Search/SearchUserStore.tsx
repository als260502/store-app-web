/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { useOrder } from "@context/OrderContext";
import { OrderUser } from "@hooks/orderReducer";
import classNames from "classnames";
import Link from "next/link";
import { Bell, MagnifyingGlass, User } from "phosphor-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  GetStoreUsersQuery,
  useGetStoreUsersQuery,
} from "../../graphql/generated";
import { Button } from "../Button";

interface SearchProps {
  email: "string";
  id: "string";
  name: "string";
  nickname: "string";
  orders: [];
  surname: "string";
  phones: "string";
}

export const SearchUserStore = () => {
  const [users, setUsers] = useState<GetStoreUsersQuery>();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<SearchProps[]>([]);

  const { setOrderUser, orderUser } = useOrder();

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

        // console.log(newUser);

        setSuggestions(Object.assign(suggestions, newUser));
      } else {
        setOrderUser({} as OrderUser);
        setSuggestions([]);
      }
      setText(text);
    },
    [users?.storeUsers, suggestions, setOrderUser]
  );

  const handleAddUser = useCallback(
    (user: SearchProps) => {
      const orderUser = {
        id: user.id,
        email: user.email,
      };
      setText(
        `${user.name} ${user.surname} ${user.nickname ? user.nickname : ""}`
      );
      setOrderUser(orderUser);
    },
    [setOrderUser]
  );

  return (
    <div className="h-16 bg-gray-200">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="h-8 w-full flex flex-row items-center justify-between px-2 ">
          <div className="flex flex-row gap-2">
            <span
              className={classNames("", {
                "text-red-700": !orderUser,
                "text-blue-700": orderUser,
              })}
            >
              {!orderUser?.id ? (
                <MagnifyingGlass size={20} />
              ) : (
                <User size={20} />
              )}
            </span>
            <div className="absolute ml-8 mx-2">
              <input
                className="md:w-[500px] px-1 bg-transparent focus:outline-none border-b-[1px] border-b-gray-400"
                placeholder="Buscar cliente..."
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
                  <React.Fragment key={i}>
                    <Button
                      onClick={() => handleAddUser(suggestion)}
                      className="bg-gray-300 lg:w-[600px] font-bold z-10 cursor-pointer hover:bg-gray-500 transition-colors  md:w-[300px] px-4 border border-gray-400 border-t-0 my-1"
                    >
                      {`${suggestion.name} ${suggestion.surname} - ${
                        suggestion.nickname ? suggestion.nickname : ""
                      }`}
                    </Button>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
