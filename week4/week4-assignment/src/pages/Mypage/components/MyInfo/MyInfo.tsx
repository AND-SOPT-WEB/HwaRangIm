import { useState } from "react";
import Button from "../../../../components/common/Button/Button";
import Input from "../../../../components/common/Input/Input";
import { inputWrapper, myInfoContainer } from "./MyInfo.style";
import { putInfo } from "../../../../apis/putInfo";

const MyInfo = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newHobby, setNewHobby] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  const handleSubmit = async () => {
    const updatedInfo: { password?: string; hobby?: string } = {};
    if (newPassword && newPassword.length > 0) {
      updatedInfo.password = newPassword;
    }
    if (newHobby && newHobby.length > 0) {
      updatedInfo.hobby = newHobby;
    }
    if (updatedInfo.password || updatedInfo.hobby) {
      const { success, result } = await putInfo(updatedInfo);
      console.log(result);

      if (success) {
        alert("변경 완료");
      } else {
        alert("변경 완료");
      }
    } else {
      alert("수정할 값을 입력해주세요");
    }
  };

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
          onChange={handlePasswordChange}
        />
        <Input
          placeholder="새 취미를 입력해주세요"
          label="새 취미"
          type="text"
          value={newHobby}
          name="newHobby"
          isValid={true}
          onChange={handleHobbyChange}
        />
        <Button variant="abled" onClick={handleSubmit}>
          수정하기
        </Button>
      </div>
    </section>
  );
};

export default MyInfo;
