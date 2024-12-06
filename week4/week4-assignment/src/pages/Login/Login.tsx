import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import { loginContainerStyle, loginTitleStyle } from "./Login.style";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { postLogin } from "../../apis/postLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { formData, handleNameChange, handlePasswordChange } = useLogin();
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNameChange(e);
    setIsIdValid(e.target.value.length <= 8 && e.target.value.length > 0);
  };
  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordChange(e);
    setIsPasswordValid(e.target.value.length <= 8 && e.target.value.length > 0);
  };

  const handleLoginClick = async () => {
    const { success, result, error } = await postLogin(formData);
    if (success) {
      alert(`로그인 성공: ${result}`);
      localStorage.setItem("token", result?.data.result.token);
      navigate("/mypage");
    } else {
      alert(`로그인 실패: ${error}`);
    }
  };

  return (
    <section css={loginContainerStyle}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <Input
        placeholder="아이디"
        label="아이디"
        type="text"
        value={formData.name}
        name="id"
        isValid={isIdValid}
        errorMessage="아이디가 틀렸습니다."
        onChange={handleNameInputChange}
      />
      <Input
        placeholder="비밀번호"
        label="비밀번호"
        type="password"
        value={formData.password}
        name="password"
        isValid={true}
        errorMessage="비밀번호가 틀렸습니다."
        onChange={handlePasswordInputChange}
      />
      <Button
        variant={isIdValid && isPasswordValid ? "abled" : "disabled"}
        onClick={handleLoginClick}
      >
        로그인
      </Button>
    </section>
  );
};

export default Login;
