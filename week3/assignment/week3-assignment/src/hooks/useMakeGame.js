const useMakeGame = (level) => {
  const row = level + 2;
  const gridSize = row * row;
  const maxNum = gridSize * 2;

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

  return {
    gridSize,
    maxNum,
    generateNumbers,
  };
};

export default useMakeGame;
