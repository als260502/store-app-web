import React, { ReactNode } from "react";
import { useForm, UseFormProps } from "react-hook-form";

type FormProps = UseFormProps & {
  children: ReactNode;
  onSubmit: () => void;
};

export function Form({ defaultValues, children, onSubmit }: FormProps) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}

// export function Input({ register, name, ...rest }) {
//   return <input {...register(name)} {...rest} />;
// }

// export function Select({ register, options, name, ...rest }) {
//   return (
//     <select {...register(name)} {...rest}>
//       {options.map(value => (
//         <option value={value}>{value}</option>
//       ))}
//     </select>
//   );
// }
