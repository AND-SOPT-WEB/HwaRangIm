import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const signUpPageLayoutStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  width: 30%;
  padding-top: 15rem;
`;

export const signUpPageTextStyle = css`
  ${Theme.font.xLarge}
`;
