import { useState } from "react";
import Button from "../../../../components/common/Button/Button";
import Input from "../../../../components/common/Input/Input";
import { inputWrapper, myInfoContainer } from "./MyInfo.style";

const MyInfo = () => {
  const [newPassword] = useState("");
  const [newHobby] = useState("");
  return (
    <section css={myInfoContainer}>
      <h1>내 정보 수정하기</h1>
      <div css={inputWrapper}>
        <Input
          placeholder="새 비밀번호를 입력해주세요"
          label="새 비밀번호"
          type="password"
          value={newPassword}
          name="newPassword"
          isValid={true}
          onChange={() => {}}
        />
        <Input
          placeholder="새 취미를 입력해주세요"
          label="새 취미"
          type="text"
          value={newHobby}
          name="newHobby"
          isValid={true}
          onChange={() => {}}
        />
        <Button variant="abled" onClick={() => {}}>
          수정하기
        </Button>
      </div>
    </section>
  );
};

export default MyInfo;
