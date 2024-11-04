import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const backdropStyle = css`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

export const modalContainer = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  border-radius: 10px;
  background-color: ${Theme.color.lightgray2};
`;

export const modalTextStyle = css`
  color: ${Theme.color.purple2};
  ${Theme.font.large}
`;
