import { Header, Game, Ranking } from "@components";
import { useState } from "react";
import { mainStyle } from "./Home.style";

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
      <main css={mainStyle}>
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
