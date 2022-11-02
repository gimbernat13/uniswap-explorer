import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ;
  }
`;
export const lightTheme = {
  body: 'radial-gradient(100% 100% at 50% 0%, rgba(184, 202, 255, 0.51) 0%, rgba(255, 255, 255, 0) 100%), rgb(255, 255, 255)',
  // body: "linear-gradient(rgb(238, 243, 255) 0%, rgb(214, 216, 255) 100%)",
  text: '#3d3d3d',
  cardBg: 'white',
  boxShadow: 'var(--card-box-shadow)',
  sidebarBg: 'white',
};
export const darkTheme = {
  body: 'linear-gradient(rgb(32, 39, 56) 0%, rgb(7, 8, 22) 100%)',
  text: '#f1f1f1',
  cardBg: 'var(--transparent-black)',
  boxShadow: 'var(--card-box-shadow)',
  sidebarBg: 'var(--transparent-black)',
};
