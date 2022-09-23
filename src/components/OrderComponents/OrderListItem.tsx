import { useOrder } from "@context/OrderContext";
import { Product } from "@hooks/orderReducer";
import { MinusCircle, PlusCircle } from "phosphor-react";

type Props = {
  product: Product;
};

export const OrderListItem = ({ product }: Props) => {
  const {
    handleProductQuantityAdd,
    handleProductQuantitySub,
    handleAddRemoveProductToCart,
  } = useOrder();

  return (
    <li value={product.id} className="grid grid-cols-5 py-1 my-1">
      <input
        type="checkbox"
        className="w-4 h-4 cursor-pointer col-span-1 text-center"
        value={product.id}
        onChange={() => handleAddRemoveProductToCart(product)}
        checked={product.checked}
      />

      <span className="h-4 col-span-2 w-full">{product.name}</span>
      <div className="flex flex-row items-center md:text-base gap-1 w-full text-xs ">
        <MinusCircle
          className="cursor-pointer text-blue-500 hover:text-blue-800 hover:scale-125 transition-all duration-200 ease-in-out"
          onClick={() => handleProductQuantitySub(product)}
        />
        <span className="">{product.qtd}</span>
        <PlusCircle
          className="cursor-pointer text-blue-500 hover:text-blue-800 hover:scale-125 transition-all duration-200 ease-in-out"
          onClick={() => handleProductQuantityAdd(product)}
        />
      </div>
      <div className="col-span-1 text-center">{product.quantity}</div>
    </li>
  );
};
