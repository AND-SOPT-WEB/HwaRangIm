export const saveGameResult = (time, level) => {
  const gameResult = {
    timestamp: new Date().toISOString(),
    time,
    level,
  };

  const savedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
  savedResults.push(gameResult);
  localStorage.setItem("gameResults", JSON.stringify(savedResults));
};
