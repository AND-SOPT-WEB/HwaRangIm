import { useState } from "react";
import Input from "../../../../components/common/Input/Input";
import Button from "../../../../components/common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginLinkStyle, stepThreeContainer } from "./StepThree.style";

const StepThree = () => {
  const [hobby] = useState("");
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/login");
  };
  return (
    <section css={stepThreeContainer}>
      <Input
        placeholder="취미를 입력해주세요"
        label="취미"
        type="text"
        value={hobby}
        name="hobby"
        isValid={true}
        errorMessage="취미는 8자 이하로 입력해주세요"
        onChange={() => {}}
      />
      <Button variant="abled" onClick={handleNextClick}>
        회원가입
      </Button>
      <span>
        이미 회원이신가요?{" "}
        <Link to={`/login`} css={loginLinkStyle}>
          로그인
        </Link>
      </span>
    </section>
  );
};

export default StepThree;
