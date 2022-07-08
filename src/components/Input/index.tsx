import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <div className={`flex flex-col lg:w-full`}>
      {!!label && (
        <label
          className={classNames("text-sm", {
            "text-gray-400": !error?.message,
            "text-red-700": error?.message,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        id={name}
        {...rest}
        ref={ref}
        className="h-9 px-2 rounded-md border-2 border-gray-300 bg-gray-100"
      />
      {!!error && <p className="text-red-700">{error.message}</p>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
