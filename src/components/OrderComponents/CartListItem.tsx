import { useOrder } from "@context/OrderContext";
import { Product } from "@hooks/orderReducer";
import { formatCurrency } from "@utils/formatCurrency";
import { MinusCircle, Pencil, PlusCircle } from "phosphor-react";

type Props = {
  product: Product;
};

export const CartListItem = ({ product }: Props) => {
  const { updateCartProductPrice } = useOrder();

  const productTotal = formatCurrency(product.sellPrice * product.qtd);
  const productPrice = formatCurrency(product.sellPrice);

  const profit = formatCurrency(
    product.sellPrice * product.qtd - product.price * product.qtd
  );

  return (
    <li
      value={product.id}
      className="grid grid-cols-4 md:grid-cols-6 py-2 my-1 items-center text-xs md:text-sm"
    >
      <span className="col-span-1 w-full">{product.name}</span>

      <span className="col-span-1">{product.qtd}</span>
      <span className="hidden md:flex col-span-1">{product.price}</span>

      <div className="col-span-1">
        <input
          className=" input input-text w-14 md:w-20"
          placeholder={productPrice}
          step="0.01"
          min="0"
          type="number"
          onChange={e =>
            updateCartProductPrice(product, parseFloat(e.target.value))
          }
        />
      </div>

      <div className="hidden md:flex col-span-1">{productTotal}</div>
      <div className="col-span-1">{profit}</div>

      {/* <div className="col-span-1 ">
        <input className=" input input-text w-24" placeholder={productPrice} />
      <Pencil />
      </div> */}
    </li>
  );
};
