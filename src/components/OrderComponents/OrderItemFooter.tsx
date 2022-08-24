/* eslint-disable no-unused-vars */
import classNames from "classnames";
import { PaymentType } from "./PaymentType";

interface Props {
  setOrderPaymentType: (value: string) => void;
  setParcel: (value: string) => void;
  orderPaymentType: string;
  orderType?: boolean;
}

export const OrderItemFooter = ({
  setOrderPaymentType,
  setParcel,
  orderPaymentType,
}: Props) => {
  const paymentType = [
    "Dinheiro",
    "Pix-CPF",
    "Pix-Empresa",
    "Debito",
    "Crédito",
  ];

  return (
    <div className={classNames("flex flex-col")}>
      <div className={classNames("")}>
        <strong className={classNames("text-gray-400 text-xs mb-2")}>
          Forma de pagamento
        </strong>
      </div>
      <div className={classNames("grid grid-col-4 my-2")}>
        <div className={classNames("col-span-1 flex items-center space-x-4")}>
          <select
            className="input text-gray-400"
            onChange={e => setOrderPaymentType(e.target.value)}
          >
            <option>Selecione</option>
            {paymentType.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="col-span-1 flex items-center">
            {orderPaymentType === "Crédito" && (
              <PaymentType setParcel={setParcel} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
