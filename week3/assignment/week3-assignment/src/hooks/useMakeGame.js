import { saveGameResult } from "@utils/saveGame";
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

const useMakeGame = (level, time, handleTimeChange) => {
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

  const [intervalId, setIntervalId] = useState(null);
  const [isFinishGame, setIsFinishGame] = useState(false);

  const clickedCards = document.querySelectorAll("[id^='card-']");

  const handleNumberClick = (number) => {
    const clickedCard = document.getElementById(`card-${currentNumber}`);
    if (number === currentNumber) {
      clickedCard.classList.add("clicked");
      if (currentNumber === 1) {
        const id = setInterval(() => {
          handleTimeChange((prev) => parseFloat((prev + 0.01).toFixed(2)));
        }, 10);
        setIntervalId(id);
      }
      if (number === maxNum) {
        clearInterval(intervalId);
        saveGameResult(time, level);
        setIsFinishGame(true);
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
      clickedCard.classList.remove(`card-${currentNumber}`);
      setCurrentNumber(currentNumber + 1);
    }
  };

  const closeModal = () => {
    clickedCards.forEach((card) => card.classList.remove("clicked"));
    setBoardNumbers(generateNumbers(1, gridSize));
    setNextNumbers(generateNumbers(gridSize + 1, maxNum));
    setIsFinishGame(false);
    setCurrentNumber(1);
    handleTimeChange(0);
  };

  useEffect(() => {
    clickedCards.forEach((card) => card.classList.remove("clicked"));
    setBoardNumbers(generateNumbers(1, gridSize));
    setNextNumbers(generateNumbers(gridSize + 1, maxNum));
    setIsFinishGame(false);
    clearInterval(intervalId);
    setCurrentNumber(1);
    handleTimeChange(0);
    return () => clearInterval(intervalId);
  }, [level]);

  return {
    row,
    boardNumbers,
    currentNumber,
    isFinishGame,
    closeModal,
    generateNumbers,
    handleNumberClick,
  };
};

export default useMakeGame;
