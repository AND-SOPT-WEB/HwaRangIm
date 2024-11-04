import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 7rem;
  background-color: ${Theme.color.purple1};
`;

export const headerLeft = css`
  display: flex;
  gap: 2rem;
  align-items: center;

  h1 {
    color: ${Theme.color.white};
    ${Theme.font.xLarge};
  }
`;

export const headerRight = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;

  select {
    height: 100%;
    padding: 0 1rem 0 0.5rem;
    border-radius: 7px;
  }

  div {
    width: 4rem;
    padding-top: 0.2rem;
    color: ${Theme.color.white};
    ${Theme.font.large};
  }
`;
