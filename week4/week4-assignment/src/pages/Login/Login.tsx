import { useState } from "react";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import { loginContainerStyle, loginTitleStyle } from "./Login.style";

const Login = () => {
  const [id] = useState("");
  const [password] = useState("");
  return (
    <section css={loginContainerStyle}>
      <h1 css={loginTitleStyle}>로그인</h1>
      <Input
        placeholder="아이디"
        label="아이디"
        type="text"
        value={id}
        name="id"
        isValid={true}
        errorMessage="아이디가 틀렸습니다."
        onChange={() => {}}
      />
      <Input
        placeholder="비밀번호"
        label="비밀번호"
        type="password"
        value={password}
        name="password"
        isValid={true}
        errorMessage="비밀번호가 틀렸습니다."
        onChange={() => {}}
      />
      <Button variant="abled" onClick={() => {}}>
        로그인
      </Button>
    </section>
  );
};

export default Login;
