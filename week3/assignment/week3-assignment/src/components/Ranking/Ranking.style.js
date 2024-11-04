import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const rankingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem;

  background-color: ${Theme.color.white};
`;

export const rankingHeaderStyle = css`
  position: relative;
  width: 100%;
  text-align: center;

  h1 {
    ${Theme.font.xLarge};
  }

  div {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const tableStyle = css`
  width: 100%;

  &,
  th,
  td {
    border-collapse: collapse;
    border: 1px solid ${Theme.color.lightgray};
    padding: 0.3rem;
    text-align: start;
    padding: 1.2rem 0.7rem;
    ${Theme.font.medium};
  }
`;

export const theadStyle = css`
  background-color: ${Theme.color.purple2};
  color: ${Theme.color.white};
`;

export const tbodyStyle = css`
  background-color: ${Theme.color.purple5};
`;
