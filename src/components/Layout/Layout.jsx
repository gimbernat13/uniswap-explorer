import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavButtons } from "../NavButtons/NavButtons";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = ({ children }) => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    // <div style={theme}>
    <>
      <Sidebar />
      <div className="main container">{children}</div>
    </>

    // </div>
  );
};
