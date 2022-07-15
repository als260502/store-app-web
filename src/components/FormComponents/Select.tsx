import { SelectHTMLAttributes, useCallback, useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Plus, PlusCircle } from "phosphor-react";
import classNames from "classnames";

import { Input } from "./Input";

interface Category {
  id: string;
  name: string;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: Category[];
  error?: FieldError;
  label?: string;
}

interface CreateCategoryFormData {
  name: string;
}

const createCategoryFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
});

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
