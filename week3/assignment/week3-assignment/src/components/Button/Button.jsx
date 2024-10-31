import { buttonStyle, variantStyle } from "./Button.style";

const Button = ({ variant, isSelected, onClick, children }) => {
  return (
    <button
      css={[buttonStyle(isSelected), variantStyle[variant]]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
