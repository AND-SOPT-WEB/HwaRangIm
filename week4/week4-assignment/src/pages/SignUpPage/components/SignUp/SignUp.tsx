import { FunnelProps, StepProps } from "../../../../hooks/useFunnel";
import StepOne from "../StepOne/StepOne";
import StepThree from "../StepThree/StepThree";
import StepTwo from "../StepTwo/StepTwo";

export interface SignupProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const SignUp = ({ steps, nextClickHandler, Funnel, Step }: SignupProps) => {
  return (
    <Funnel>
      <Step name={steps[0]}>
        <StepOne onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <StepTwo onNext={() => nextClickHandler(steps[2])} />
      </Step>
      <Step name={steps[2]}>
        <StepThree />
      </Step>
    </Funnel>
  );
};

export default SignUp;
