import { css } from "@emotion/react";
import { Theme } from "../../../../styles/theme";

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  background-color: ${Theme.color.purple1};
`;

export const headerLeft = css`
  display: flex;
  gap: 2rem;
  align-items: center;

  span {
    white-space: nowrap;
    ${Theme.font.large};
    color: ${Theme.color.white};
  }
`;
export const headerRight = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
