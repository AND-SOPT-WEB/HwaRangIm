import { useState } from "react";
import Input from "../../../../components/common/Input/Input";
import { StepProps } from "../../../../types/nextStep";
import { stepOneContainer } from "./StepOne.style";
import Button from "../../../../components/common/Button/Button";

const StepOne = ({ onNext }: StepProps) => {
  const [id] = useState("");
  const handleNextClick = () => {
    onNext();
  };
  return (
    <section css={stepOneContainer}>
      <Input
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        type="text"
        value={id}
        name="id"
        isValid={true}
        errorMessage="이름은 8자 이하로 입력해주세요"
        onChange={() => {}}
      />
      <Button variant="abled" onClick={handleNextClick}>
        다음
      </Button>
    </section>
  );
};

export default StepOne;
