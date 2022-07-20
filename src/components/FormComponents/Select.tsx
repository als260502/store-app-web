import { SelectHTMLAttributes } from "react";
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

export function Select({
  options,
  name,
  label,
  error = null,
  ...rest
}: SelectProps) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label
          className={classNames("text-sm", {
            "text-gray-400": !error?.message,
            "text-red-700": error?.message,
          })}
          htmlFor={name}
        >
          {label}
        </label>

        <div className="flex flex-row z-10 items-center gap-4 text-gray-400">
          <select {...rest} className="input">
            {options?.map(value => (
              <option key={value.id} value={value.name}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!!error && <p className="text-red-700">{error.message}</p>}
    </div>
  );
}
