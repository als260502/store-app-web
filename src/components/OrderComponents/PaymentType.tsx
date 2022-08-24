import classNames from "classnames";

type Props = {
  // eslint-disable-next-line no-unused-vars
  setParcel: (value: string) => void;
};
export const PaymentType = ({ setParcel }: Props) => {
  return (
    <div className={classNames("text-gray-400")}>
      <div>
        <select className="input" onChange={e => setParcel(e.target.value)}>
          <option defaultChecked value={1}>
            Parcela-1
          </option>
          <option selected value={2}>
            Parcelas-2
          </option>
          <option selected value={3}>
            Parcelas-3
          </option>
          <option selected value={4}>
            Parcelas-4
          </option>
          <option selected value={5}>
            Parcelas-5
          </option>
          <option selected value={6}>
            Parcelas-6
          </option>
          <option selected value={7}>
            Parcelas-7
          </option>
          <option selected value={8}>
            Parcelas-8
          </option>
          <option selected value={9}>
            Parcelas-9
          </option>
          <option selected value={10}>
            Parcelas-10
          </option>
          <option selected value={11}>
            Parcelas-11
          </option>
          <option selected value={12}>
            Parcelas-12
          </option>
        </select>
      </div>
    </div>
  );
};
