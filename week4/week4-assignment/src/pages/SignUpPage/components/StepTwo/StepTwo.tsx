import { useState } from "react";
import Input from "../../../../components/common/Input/Input";
import { StepProps } from "../../../../types/nextStep";
import Button from "../../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { loginLinkStyle, stepTwoContainer } from "./StepTwo.style";

const StepTwo = ({ onNext }: StepProps) => {
  const [password] = useState("");
  const handleNextClick = () => {
    onNext();
  };
  return (
    <section css={stepTwoContainer}>
      <Input
        placeholder="비밀번호를 입력해주세요"
        label="비밀번호"
        type="password"
        value={password}
        name="password"
        isValid={true}
        onChange={() => {}}
      />
      <Input
        placeholder="비밀번호를 입력해주세요"
        label="비밀번호"
        type="password"
        value={password}
        name="password"
        isValid={true}
        errorMessage="비밀번호가 일치하지 않습니다"
        onChange={() => {}}
      />
      <Button variant="abled" onClick={handleNextClick}>
        다음
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

export default StepTwo;
