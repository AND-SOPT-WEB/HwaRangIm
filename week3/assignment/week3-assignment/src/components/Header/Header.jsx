import { Button } from "@components";
import { headerLeft, headerRight, headerStyle } from "./Header.style";

const Header = ({ tab, handleTabChange }) => {
  return (
    <header css={headerStyle}>
      <div css={headerLeft}>
        <h1>1 to 50</h1>
        <div>
          <Button
            variant="small"
            isSelected={tab === "game"}
            onClick={() => handleTabChange("game")}
          >
            게임
          </Button>
          <Button
            variant="small"
            isSelected={tab === "ranking"}
            onClick={() => handleTabChange("ranking")}
          >
            랭킹
          </Button>
        </div>
      </div>
      <div css={headerRight}>
        <select>
          <option value="level1">Level1</option>
          <option value="level2">Level2</option>
          <option value="level3">Level3</option>
        </select>
        <div>0</div>
      </div>
    </header>
  );
};

export default Header;
