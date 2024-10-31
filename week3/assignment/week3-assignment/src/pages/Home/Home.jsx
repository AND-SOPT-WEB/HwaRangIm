import { Header, Game, Ranking } from "@components";
import { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState("game");

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  return (
    <div>
      <Header tab={tab} handleTabChange={handleTabChange} />
      {tab === "game" ? <Game /> : <Ranking />}
    </div>
  );
};

export default Home;
