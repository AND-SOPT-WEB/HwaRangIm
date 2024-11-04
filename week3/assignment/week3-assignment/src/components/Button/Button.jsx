import { buttonStyle, variantStyle } from "./Button.style";

const Button = ({ variant, isSelected, onClick, customStyle, children }) => {
  return (
    <button
      css={[buttonStyle(isSelected), variantStyle[variant], customStyle]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
