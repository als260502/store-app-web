import { createContext, ReactNode, useContext } from "react";

type ContextProps = {};
const OrderContext = createContext({} as ContextProps);

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
};

export const useOrder = () => {
  return useContext(OrderContext);
};
