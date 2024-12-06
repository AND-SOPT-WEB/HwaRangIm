import { useEffect, useState } from "react";
import Input from "../../../../components/common/Input/Input";
import { hobbyDiv, myhobbyContainer, showHobbyBox } from "./MyHobby.style";
import { fetchMyHobby } from "../../../../apis/fetchMyHobby";
import Button from "../../../../components/common/Button/Button";
import { fetchOtherPeopleHobby } from "../../../../apis/fetchOtherPeopleHobby";

const MyHobby = () => {
  const [myhobby, setMyHobby] = useState("");
  const [otherPeopleNum, setOtherPeopleNum] = useState("");
  const [otherPeopleHobby, setOtherPeopleHobby] = useState("");

  useEffect(() => {
    const getMyHobby = async () => {
      try {
        const result = await fetchMyHobby();
        const hobby = result.result?.data.result.hobby;
        setMyHobby(hobby);
      } catch (error) {
        console.error(error);
      }
    };

    getMyHobby();
  }, []);
  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherPeopleNum(e.target.value);
  };
  const handleSearch = () => {
    const getOtherPeopleHobby = async () => {
      try {
        const result = await fetchOtherPeopleHobby(Number(otherPeopleNum));
        const hobby = result.result?.data.result.hobby;
        if (hobby === undefined) {
          alert("잘못된 번호입니다.");
        } else {
          setOtherPeopleHobby(hobby);
        }
      } catch (error) {
        alert(error);
      }
    };
    getOtherPeopleHobby();
  };

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
            onChange={handleNumChange}
          />
          <Button variant={"abled"} onClick={handleSearch}>
            검색
          </Button>
          <span>{`${otherPeopleNum}번 사용자의 취미: ${otherPeopleHobby}`}</span>
        </div>
      </div>
    </section>
  );
};

export default MyHobby;
