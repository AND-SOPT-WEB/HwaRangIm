import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const numberCardStyle = (children) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  border: none;
  outline: none;

  background-color: ${children !== null ? Theme.color.purple3 : "transparent"};
  color: ${Theme.color.white};
  ${Theme.font.large};
`;
