import { lightTheme } from "@uniswap/widgets";
import { Button } from "components/atomic/atoms/Button/Button";
import { Container } from "components/atomic/atoms/Container/Container";
import { MobileBar } from "components/atomic/organisms/MobileBar/MobileBar";
import { Sidebar } from "components/atomic/organisms/Sidebar/Sidebar";
import { useDarkMode } from "hooks/useDarkMode";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "../GlobalStyles/GlobalStyles";
export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Button onClick={toggleTheme}> Togle teeeeeeeme </Button>
      <Sidebar />
      <div className="main">
        <Container>{children}</Container>
      </div>
      <MobileBar />
    </ThemeProvider>
  );
};
