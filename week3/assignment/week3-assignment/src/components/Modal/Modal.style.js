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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 15rem;

  padding: 2rem;

  border-radius: 10px;
  background-color: ${Theme.color.lightgray2};
`;

export const modalTextStyle = css`
  color: ${Theme.color.purple2};
  ${Theme.font.large}
  margin-top: 3rem;
`;

export const buttonStyle = css`
  margin-top: auto;
  background-color: ${Theme.color.purple2};
`;
