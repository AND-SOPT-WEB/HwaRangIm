import { Button } from "@components";
import {
  rankingContainer,
  rankingHeaderStyle,
  tableStyle,
  tbodyStyle,
  theadStyle,
} from "./Ranking.style";
import { useEffect, useState } from "react";
import { formatDate } from "@utils/formatDate";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    const sortedResults = savedResults.sort((a, b) => {
      if (b.level === a.level) {
        return a.time - b.time;
      }
      return b.level - a.level;
    });
    setRankings(sortedResults);
  }, []);

  const handleResetClick = () => {
    localStorage.removeItem("gameResults");
    setRankings([]);
  };
  return (
    <section css={rankingContainer}>
      <div css={rankingHeaderStyle}>
        <h1>랭킹</h1>
        <div>
          <Button variant="reset" onClick={handleResetClick}>
            초기화
          </Button>
        </div>
      </div>
      <table css={tableStyle}>
        <thead css={theadStyle}>
          <tr>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>
        <tbody css={tbodyStyle}>
          {rankings.map((result, i) => (
            <tr key={i}>
              <td>{formatDate(result.timestamp)}</td>
              <td>Level{result.level}</td>
              <td>{result.time} 초</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Ranking;
