import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const gameContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100dvh - 5.2rem);
  gap: 3rem;

  padding-top: 2rem;
`;

export const nextNumSpanStyle = css`
  ${Theme.font.medium700};
  color: ${Theme.color.purple1};
`;

export const gameWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;
