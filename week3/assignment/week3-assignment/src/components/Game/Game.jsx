import useMakeGame from "@hooks/useMakeGame";

import { NumberCard, Modal } from "@components";
import { gameContainer, gameWrapper, nextNumSpanStyle } from "./Game.style";

const Game = ({ level, time, handleTimeChange }) => {
  const {
    row,
    boardNumbers,
    currentNumber,
    isFinishGame,
    closeModal,
    handleNumberClick,
  } = useMakeGame(level, time, handleTimeChange);

  return (
    <>
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
      {isFinishGame && <Modal time={time} closeModal={closeModal} />}
    </>
  );
};

export default Game;
