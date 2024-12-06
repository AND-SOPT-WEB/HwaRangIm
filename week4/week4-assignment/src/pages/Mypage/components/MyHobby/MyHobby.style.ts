import { css } from "@emotion/react";
import { Theme } from "../../../../styles/theme";

export const myhobbyContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 2rem auto;

  h1 {
    ${Theme.font.xLarge};
  }
`;

export const showHobbyBox = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  margin-top: 2rem;
`;

export const hobbyDiv = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    ${Theme.font.medium700}
  }
`;
