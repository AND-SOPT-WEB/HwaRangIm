import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme";

export const inputWrapperStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",

  width: "100%",
});
export const inputLayoutStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  width: "100%",
});

export const inputStyle = css({
  width: "100%",
  height: "40px",
  padding: "0.3rem 1rem",

  border: `1px solid ${Theme.color.purple1}`,
  borderRadius: "4px",

  "&:focus": {
    outline: "none",
  },
});

export const labelStyle = css`
  color: ${Theme.color.purple3};
  ${Theme.font.medium700};
`;

export const errorMessageStyle = css({
  color: Theme.color.error,
});
