import {
  SelectHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";

import classNames from "classnames";

interface Options {
  id: string;
  name: string;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: Options[];
  error?: FieldError;
  label?: string;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { options, name, label, error = null, ...rest },
  ref
) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400" htmlFor={name}>
          {label}
        </label>

        <div className="flex flex-row z-10 items-center gap-4 text-gray-400">
          <select {...rest} name={name} ref={ref} className="input">
            <option></option>
            {options?.map(value => (
              <option key={value.id} value={`${value.id},${value.name}`}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!!error && <p className="text-red-700">{error.message}</p>}
    </div>
  );
};

export const Select = forwardRef(SelectBase);
