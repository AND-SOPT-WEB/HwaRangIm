import { css } from "@emotion/react";
import { Theme } from "../../../../styles/theme";

export const myInfoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 2rem auto;

  h1 {
    ${Theme.font.xLarge};
  }
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.3rem;

  margin-top: 2rem;
`;
