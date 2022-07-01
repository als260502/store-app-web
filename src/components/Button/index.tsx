import { ReactNode, ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button type="button" {...rest}>
        {children}
      </button>
    </div>
  );
};
