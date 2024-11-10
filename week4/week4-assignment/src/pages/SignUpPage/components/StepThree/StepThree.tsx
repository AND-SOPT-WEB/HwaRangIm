import Input from "../../../../components/common/Input/Input";
import Button from "../../../../components/common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginLinkStyle, stepThreeContainer } from "./StepThree.style";
import { useSignup } from "../../../../hooks/useSignup";
import { useState } from "react";

const StepThree = () => {
  const { formData, handleHobbyChange } = useSignup();
  const [isHobbyValid, setIsHobbyValid] = useState(false);
  const navigate = useNavigate();

  const handleHobbyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleHobbyChange(e);
    setIsHobbyValid(e.target.value.length <= 8 && e.target.value.length > 0);
  };
  const handleNextClick = () => {
    navigate("/login");
  };
  return (
    <section css={stepThreeContainer}>
      <Input
        placeholder="취미를 입력해주세요"
        label="취미"
        type="text"
        value={formData.hobby}
        name="hobby"
        isValid={isHobbyValid}
        errorMessage="취미는 8자 이하로 입력해주세요"
        onChange={handleHobbyInputChange}
      />
      <Button
        variant={isHobbyValid ? "abled" : "disabled"}
        onClick={handleNextClick}
      >
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
