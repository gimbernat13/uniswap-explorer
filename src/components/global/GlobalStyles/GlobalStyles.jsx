import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: "#E2E4EB",
  // body: "linear-gradient(rgb(238, 243, 255) 0%, rgb(214, 216, 255) 100%)",
  text: "#3d3d3d",
  cardBg: "#ffffffc0",
  boxShadow: "var(--card-box-shadow)",
};
export const darkTheme = {
  body: "linear-gradient(rgb(32, 39, 56) 0%, rgb(7, 8, 22) 100%)",
  text: "#f1f1f1",
  cardBg: "var(--transparent-black)",
  boxShadow: "var(--card-box-shadow)",
};
