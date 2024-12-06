import { ButtonHTMLAttributes } from "react";
import { buttonStyle, variantStyle } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "abled" | "disabled" | "tab";
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
  const isDisabled = variant === "disabled";
  return (
    <button
      css={[buttonStyle, variantStyle[variant]]}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
