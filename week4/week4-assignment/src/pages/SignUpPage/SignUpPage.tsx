import { useParams } from "react-router-dom";
import { useFunnel } from "../../hooks/useFunnel";
import SignUp from "./components/SignUp/SignUp";
import { signUpPageLayoutStyle, signUpPageTextStyle } from "./SignUpPage.style";

const steps = ["name", "password", "hobby"];

const SignUpPage = () => {
  const { step } = useParams<{ step: string }>();
  const { Funnel, Step, nextStep } = useFunnel(step || steps[0], "signup");
  return (
    <section css={signUpPageLayoutStyle}>
      <h1 css={signUpPageTextStyle}>회원가입</h1>
      <SignUp
        steps={steps}
        nextClickHandler={nextStep}
        Funnel={Funnel}
        Step={Step}
      />
    </section>
  );
};

export default SignUpPage;
