import { useOrder } from "@context/OrderContext";
import { Cart } from "@hooks/orderReducer";
import { formatCurrency } from "@utils/formatCurrency";

type Props = {
  product: Cart;
};

export const CartListItem = ({ product }: Props) => {
  const { updateCartProductPrice, updatePaymentTax, updateProductProfit } =
    useOrder();

  let tax = 0;

  if (product.tax) {
    tax = product.tax > 0 ? product.tax : 0;
  }

  const productTotal = product.total
    ? formatCurrency(product.total)
    : formatCurrency(product.sellPrice * product.qtd);
  const productPrice = formatCurrency(product.sellPrice);

  const productProfitCalc =
    product.sellPrice * product.qtd - product.price * product.qtd;

  const taxedProfit = (productProfitCalc * tax) / 100;

  const productProfit = productProfitCalc - taxedProfit;

  const profit = formatCurrency(productProfit);
  const price = formatCurrency(product.price);

  return (
    <li
      value={product.id}
      className="grid grid-cols-4 md:grid-cols-7 py-2 my-1 items-center text-xs md:text-sm"
    >
      <span className="col-span-1 w-full">{product.name}</span>

      <span className="hidden md:flex col-span-1">{product.qtd}</span>
      <span className="hidden md:flex col-span-1">{price}</span>

      <div className="col-span-1">
        <input
          className=" input px-1 w-16 md:w-20"
          placeholder={productPrice}
          step="0.01"
          min="0"
          type="number"
          onChange={e =>
            updateCartProductPrice(product, parseFloat(e.target.value))
          }
        />
      </div>

      <div className="col-span-1">
        <input
          className="input input-text w-12 md:w-12"
          placeholder="0 %"
          step="0.01"
          min="0"
          type="number"
          onChange={e => updatePaymentTax(product, parseFloat(e.target.value))}
          value={product.tax ? product.tax : ""}
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
