import { numberCardStyle } from "./NumberCard.style";

const NumberCard = ({ onClick, children, id }) => {
  return (
    <button css={numberCardStyle(children)} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default NumberCard;
