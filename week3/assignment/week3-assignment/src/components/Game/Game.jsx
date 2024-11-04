import useMakeGame from "@hooks/useMakeGame";

import { NumberCard } from "@components";
import { gameContainer, gameWrapper, nextNumSpanStyle } from "./Game.style";

const Game = ({ level, time, handleTimeChange }) => {
  const { row, boardNumbers, currentNumber, handleNumberClick } = useMakeGame(
    level,
    time,
    handleTimeChange
  );

  return (
    <section css={gameContainer}>
      <span css={nextNumSpanStyle}>다음 숫자: {currentNumber}</span>
      <section css={gameWrapper(row)}>
        {boardNumbers.map((number, i) => (
          <NumberCard key={i} onClick={() => handleNumberClick(number)}>
            {number}
          </NumberCard>
        ))}
      </section>
    </section>
  );
};

export default Game;
