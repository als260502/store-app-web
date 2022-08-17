import { memo } from "react";

type PaymentItemProps = {
  total: number;
  date: string;
};

const PaymentItemBase = () => {
  return <div>Hello PaymentComponents!!!</div>;
};

export const PaymentItem = memo(PaymentItemBase);
