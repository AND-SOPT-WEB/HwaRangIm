import { useNavigate } from "react-router-dom";
import Button from "../../../../components/common/Button/Button";
import { headerLeft, headerRight, headerStyle } from "./Header.style";

export interface HeaderProps {
  handleTabChange: (tab: string) => void;
}

const Header = ({ handleTabChange }: HeaderProps) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header css={headerStyle}>
      <div css={headerLeft}>
        <span>마이페이지</span>
        <Button variant="tab" onClick={() => handleTabChange("hobby")}>
          취미
        </Button>
        <Button variant="tab" onClick={() => handleTabChange("info")}>
          내 정보
        </Button>
      </div>
      <div css={headerRight}>
        <Button variant="tab" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </div>
    </header>
  );
};

export default Header;
