import { css } from "@emotion/react";

const color = {
  black: "#17171a",
  white: "#fff",

  lightgray: "#f4f4f4",
  lightgray2: "#c6cad4",

  purple1: "#5451FF",
  purple2: "#7774FF",
  purple3: "#9997FF",
  purple4: "#BBB9FF",
  purple5: "#DDDCFF",
  purple6: "#EEEEFF",
};

const font = {
  xLarge: css`
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 145%;
  `,
  large: css`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 0;
  `,
};

export const Theme = {
  color,
  font,
};
