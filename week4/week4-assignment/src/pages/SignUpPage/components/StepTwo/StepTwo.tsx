import Input from "../../../../components/common/Input/Input";
import { StepProps } from "../../../../types/nextStep";
import Button from "../../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { loginLinkStyle, stepTwoContainer } from "./StepTwo.style";
import { useSignup } from "../../../../hooks/useSignup";
import { useState } from "react";

const StepTwo = ({ onNext }: StepProps) => {
  const { formData, handlePasswordChange, handlePasswordCheckChange } =
    useSignup();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordChange(e);
    setIsPasswordValid(e.target.value.length <= 8 && e.target.value.length > 0);
  };
  const handlePasswordCheckInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordCheckChange(e);
    setIsPasswordCheckValid(e.target.value === formData.password);
  };
  const handleNextClick = () => {
    onNext();
  };
  return (
    <section css={stepTwoContainer}>
      <Input
        placeholder="비밀번호를 입력해주세요"
        label="비밀번호"
        type="password"
        value={formData.password}
        name="password"
        isValid={isPasswordValid}
        errorMessage="비밀번호를 8자 이하로 입력해주세요"
        onChange={handlePasswordInputChange}
      />
      <Input
        placeholder="비밀번호를 입력해주세요"
        label="비밀번호"
        type="password"
        value={formData.passwordCheck}
        name="password"
        isValid={isPasswordCheckValid}
        errorMessage="비밀번호가 일치하지 않습니다"
        onChange={handlePasswordCheckInputChange}
      />
      <Button variant={(isPasswordValid && isPasswordCheckValid) ? "abled" : "disabled" } onClick={handleNextClick}>
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
