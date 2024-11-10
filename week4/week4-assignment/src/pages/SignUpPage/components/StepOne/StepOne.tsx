import Input from "../../../../components/common/Input/Input";
import { StepProps } from "../../../../types/nextStep";
import { stepOneContainer } from "./StepOne.style";
import Button from "../../../../components/common/Button/Button";
import { useSignup } from "../../../../hooks/useSignup";
import { useState } from "react";

const StepOne = ({ onNext }: StepProps) => {
  const { formData, handleNameChange } = useSignup();
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNameChange(e);
    setIsValid(e.target.value.length <= 8 && e.target.value.length > 0);
  };
  const handleNextClick = () => {
    onNext();
  };
  return (
    <section css={stepOneContainer}>
      <Input
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        type="text"
        value={formData.name}
        name="name"
        isValid={isValid}
        errorMessage="이름은 8자 이하로 입력해주세요"
        onChange={handleInputChange}
      />
      <Button
        variant={isValid ? "abled" : "disabled"}
        onClick={handleNextClick}
      >
        다음
      </Button>
    </section>
  );
};

export default StepOne;
