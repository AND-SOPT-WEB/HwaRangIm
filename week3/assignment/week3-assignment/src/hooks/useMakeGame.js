import { useEffect, useState } from "react";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateNumbers = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return shuffleArray(numbers);
};

const useMakeGame = (level) => {
  const row = level + 2;
  const gridSize = row * row;
  const maxNum = gridSize * 2;
  const [boardNumbers, setBoardNumbers] = useState(
    generateNumbers(1, gridSize)
  );
  const [nextNumbers, setNextNumbers] = useState(
    generateNumbers(gridSize + 1, maxNum)
  );
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleNumberClick = (number) => {
    if (number === currentNumber) {
      if (number === maxNum) {
        alert("끝");
        setBoardNumbers(generateNumbers(1, gridSize));
        setNextNumbers(generateNumbers(gridSize + 1, maxNum));
        setCurrentNumber(1);
        return;
      }
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
    setBoardNumbers(generateNumbers(1, gridSize));
    setNextNumbers(generateNumbers(gridSize + 1, maxNum));
  }, [level]);

  return {
    row,
    boardNumbers,
    currentNumber,
    generateNumbers,
    handleNumberClick,
  };
};

export default useMakeGame;
