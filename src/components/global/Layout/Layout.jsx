import { Container } from "components/atomic/atoms/Container/Container";
import { MobileBar } from "components/atomic/organisms/MobileBar/MobileBar";
import { Sidebar } from "components/atomic/organisms/Sidebar/Sidebar";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
export const Layout = ({ children }) => {
  // const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    // <div style={theme}>
    <>
      <Sidebar />
      <div className="main">
        <Container>{children}</Container>
      </div>
      <MobileBar />
    </>

    // </div>
  );
};
