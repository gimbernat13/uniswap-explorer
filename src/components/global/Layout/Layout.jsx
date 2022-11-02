import { Container } from 'components/atomic/atoms/Container/Container';
import { MobileBar } from 'components/atomic/organisms/MobileBar/MobileBar';
import { Sidebar } from 'components/atomic/organisms/Sidebar/Sidebar';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  darkTheme,
  lightTheme,
  GlobalStyles,
} from '../GlobalStyles/GlobalStyles';

export function Layout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <div className="main">
        <Container>{children}</Container>
      </div>
      <MobileBar />
    </ThemeProvider>
  );
}
