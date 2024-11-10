import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme";

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 4px;
  border: none;

  white-space: nowrap;

  cursor: pointer;

  :hover {
    background-color: ${Theme.color.purple1};
    color: ${Theme.color.white};
    transition: all 0.5s ease-in-out;
  }
`;

export const variantStyle = {
  default: css`
    background-color: ${Theme.color.white};
    color: ${Theme.color.black};
    ${Theme.font.large};
    padding: 2rem;
  `,
  disabled: css`
    background-color: ${Theme.color.lightgray2};
    color: ${Theme.color.black};
    ${Theme.font.large};
    padding: 2rem;

    :hover {
      color: ${Theme.color.black};
      background-color: ${Theme.color.lightgray2};
    }
  `,

  abled: css`
    background-color: ${Theme.color.purple2};
    color: ${Theme.color.white};
    ${Theme.font.large};
    padding: 2rem;
  `,
  tab: css`
    height: 3rem;
    border-radius: 7px;
    padding: 0.4rem 1.2rem;
  `,
};
