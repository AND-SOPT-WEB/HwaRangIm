import { useState } from "react";
import Input from "../../../../components/common/Input/Input";
import { hobbyDiv, myhobbyContainer, showHobbyBox } from "./MyHobby.style";

const MyHobby = () => {
  const [myhobby] = useState("독서");
  const [otherPeopleNum] = useState(0);
  const [otherPeopleHobby] = useState("");
  return (
    <section css={myhobbyContainer}>
      <h1>취미</h1>
      <div css={showHobbyBox}>
        <div css={hobbyDiv}>
          <h2>나의 취미</h2>
          <span>{myhobby}</span>
        </div>
        <div css={hobbyDiv}>
          <h2>다른 사람들의 취미</h2>
          <Input
            placeholder="사용자 번호"
            type="number"
            value={otherPeopleNum}
            name="number"
            isValid={true}
            errorMessage="해당 번호의 데이터가 존재하지 않습니다"
            onChange={() => {}}
          />
          <span>{`${otherPeopleNum}번 사용자의 취미: ${otherPeopleHobby}`}</span>
        </div>
      </div>
    </section>
  );
};

export default MyHobby;
