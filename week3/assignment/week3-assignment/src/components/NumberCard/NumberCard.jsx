import { numberCardStyle } from "./NumberCard.style";

const NumberCard = ({ onClick, children }) => {
  return (
    <button css={numberCardStyle(children)} onClick={onClick}>
      {children}
    </button>
  );
};

export default NumberCard;
