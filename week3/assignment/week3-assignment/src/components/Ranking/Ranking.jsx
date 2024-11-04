import { Button } from "@components";
import {
  rankingContainer,
  rankingHeaderStyle,
  tableStyle,
  tbodyStyle,
  theadStyle,
} from "./Ranking.style";

const Ranking = () => {
  return (
    <section css={rankingContainer}>
      <div css={rankingHeaderStyle}>
        <h1>랭킹</h1>
        <div>
          <Button variant="reset">초기화</Button>
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
          <tr>
            <td>2024.11.04 오후 05시 30분</td>
            <td>Level1</td>
            <td>10.10초</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Ranking;
