import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <div>
      <button disabled={loading} {...rest}>
        {children}
      </button>
    </div>
  );
};
