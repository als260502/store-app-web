import classNames from "classnames";
import { PlusCircle } from "phosphor-react";
import { useCallback, useState } from "react";
import { FieldError } from "react-hook-form";
import { Input } from "./Input";

interface SelectProps {
  name: string;
  options: string[];
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
  const [category, setCategory] = useState("");

  const handleAddCategory = useCallback(async () => {}, []);

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

        <div className="flex flex-row items-center gap-4 text-gray-400">
          <select {...rest}>
            {options.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="flex flex-row items-center gap-1 rounded-2xl p-2 border border-gray-400
             hover:bg-blue-600 hover:text-gray-200 text-gray-400 transition-colors ease-in-out duration-300"
          >
            <PlusCircle size={20} />
            <strong className="text-sm">Nova categoria</strong>
          </button>
        </div>
        {category && (
          <Input
            name="category"
            label="Nome"
            type="text"
            placeholder="Camisa polo"
            className="input input-text"
          />
        )}
      </div>
      {!!error && <p className="text-red-700">{error.message}</p>}
    </div>
  );
}
