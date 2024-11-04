import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const buttonStyle = (isClicked) => css`
  border: none;
  outline: none;
  color: ${Theme.color.white};
  background-color: ${isClicked ? Theme.color.purple3 : `transparent`};
  cursor: pointer;
`;

export const variantStyle = {
  tab: css`
    height: 3rem;
    padding: 0.4rem 1.2rem;
    border-radius: 7px;
  `,
  reset: css`
    width: 7rem;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    background-color: ${Theme.color.purple2};
    color: ${Theme.color.white};
  `,
};
