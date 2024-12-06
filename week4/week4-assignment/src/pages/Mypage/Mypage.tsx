import { useState } from "react";
import Header from "./components/Header/Header";
import MyHobby from "./components/MyHobby/MyHobby";
import MyInfo from "./components/MyInfo/MyInfo";
import { mypageContainer } from "./Mypage.style";

const Mypage = () => {
  const [tab, setTab] = useState("hobby");
  const handleTabChange = (tab: string) => {
    setTab(tab);
  };
  return (
    <div css={mypageContainer}>
      <Header handleTabChange={handleTabChange} />
      {tab === "hobby" ? <MyHobby /> : <MyInfo />}
    </div>
  );
};

export default Mypage;
