import { Button } from "@components";
import { headerLeft, headerRight, headerStyle } from "./Header.style";

const Header = ({ tab, time, handleTabChange, handleLevelSelect }) => {
  return (
    <header css={headerStyle}>
      <div css={headerLeft}>
        <h1>1 to 50</h1>
        <div>
          <Button
            variant="tab"
            isSelected={tab === "game"}
            onClick={() => handleTabChange("game")}
          >
            게임
          </Button>
          <Button
            variant="tab"
            isSelected={tab === "ranking"}
            onClick={() => handleTabChange("ranking")}
          >
            랭킹
          </Button>
        </div>
      </div>
      {tab === "game" ? (
        <div css={headerRight}>
          <select onChange={(e) => handleLevelSelect(Number(e.target.value))}>
            <option value="1">Level1</option>
            <option value="2">Level2</option>
            <option value="3">Level3</option>
          </select>
          <div>{time}</div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
