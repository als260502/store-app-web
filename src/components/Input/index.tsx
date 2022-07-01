import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

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
    <div className={`flex flex-col lg:w-full md:w-[400px]`}>
      {!!label && (
        <label className="text-sm text-gray-400" htmlFor={name}>
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
      {!!error && <div>{error.message}</div>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
