import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const loginContainerStyle = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  margin: 0 auto;
  padding-top: 15rem;
`;

export const loginTitleStyle = css`
  ${Theme.font.xLarge}
`;
