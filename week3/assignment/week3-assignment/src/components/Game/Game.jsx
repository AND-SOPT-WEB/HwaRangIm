import useMakeGame from "@hooks/useMakeGame";
import { useEffect, useState } from "react";

const Game = ({ level }) => {
  const { gridSize, maxNum, generateNumbers } = useMakeGame(level);
  const [boardNumbers, setBoardNumbers] = useState(
    generateNumbers(1, gridSize)
  );
  const [nextNumbers, setNextNumbers] = useState(
    generateNumbers(gridSize + 1, maxNum)
  );
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleNumberClick = (number) => {
    if (number === currentNumber) {
      if (currentNumber <= gridSize) {
        const newNumber = nextNumbers.pop();
        const updatedBoard = boardNumbers.map((num) =>
          num === number ? newNumber : num
        );
        setBoardNumbers(updatedBoard);
      } else if (currentNumber > gridSize && currentNumber < maxNum) {
        const updatedBoard = boardNumbers.map((num) =>
          num === number ? null : num
        );
        setBoardNumbers(updatedBoard);
      }
      setCurrentNumber(currentNumber + 1);
    }
  };

  useEffect(() => {
    if (currentNumber > maxNum) {
      alert("끝");
      setBoardNumbers(generateNumbers(1, gridSize));
      setNextNumbers(generateNumbers(gridSize + 1, maxNum));
      setCurrentNumber(1);
    }
  }, [currentNumber]);
  return (
    <div>
      <span>다음 숫자: {currentNumber}</span>
      <div>
        {boardNumbers.map((number, i) => (
          <button key={i} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
