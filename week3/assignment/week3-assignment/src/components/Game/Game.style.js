import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const gameContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;
`;

export const nextNumSpanStyle = css`
  ${Theme.font.medium700};
  color: ${Theme.color.purple1};
`;

export const gameWrapper = (row) => css`
  display: grid;
  grid-template-columns: repeat(${row}, 1fr);
  gap: 0.5rem;
`;
