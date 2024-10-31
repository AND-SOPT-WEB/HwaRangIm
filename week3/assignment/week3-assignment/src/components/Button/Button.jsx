import { buttonStyle, variantStyle } from "./Button.style";

const Button = ({ variant, isSelected, onClick, value, children }) => {
  return (
    <button
      css={[buttonStyle(isSelected), variantStyle[variant]]}
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
