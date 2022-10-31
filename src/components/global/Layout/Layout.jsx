import { Button } from "components/atomic/atoms/Button/Button";
import { Container } from "components/atomic/atoms/Container/Container";
import { MobileBar } from "components/atomic/organisms/MobileBar/MobileBar";
import { Sidebar } from "components/atomic/organisms/Sidebar/Sidebar";
import { ThemeContext } from "context/ThemeContext";
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  lightTheme,
  GlobalStyles,
} from "../GlobalStyles/GlobalStyles";
export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const localTheme = localStorage.getItem("theme");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Button onClick={toggleTheme}> holaaaaaaaa</Button>
      <GlobalStyles />
      <Sidebar />
      <div className="main">
        <Container>{children}</Container>
      </div>
      <MobileBar />
    </ThemeProvider>
  );
};
