import { Header, Game, Ranking } from "@components";
import { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState("game");
  const [level, setLevel] = useState(1);

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  const handleLevelSelect = (level) => {
    setLevel(level);
  };
  return (
    <>
      <Header
        tab={tab}
        handleTabChange={handleTabChange}
        handleLevelSelect={handleLevelSelect}
      />
      <main>{tab === "game" ? <Game level={level} /> : <Ranking />}</main>
    </>
  );
};

export default Home;
