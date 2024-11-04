import { css, keyframes } from "@emotion/react";
import { Theme } from "../../styles/theme";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

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

  &.clicked {
    background-color: ${Theme.color.purple2};
    animation: ${blink} 0.5s;
  }
`;
