import { Header, Game, Ranking } from "@components";
import { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState("game");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  const handleLevelSelect = (level) => {
    setLevel(level);
  };
  const handleTimeChange = (time) => {
    setTime(time);
  };
  return (
    <>
      <Header
        tab={tab}
        time={time}
        handleTabChange={handleTabChange}
        handleLevelSelect={handleLevelSelect}
      />
      <main>
        {tab === "game" ? (
          <Game level={level} time={time} handleTimeChange={handleTimeChange} />
        ) : (
          <Ranking />
        )}
      </main>
    </>
  );
};

export default Home;
