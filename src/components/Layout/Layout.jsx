import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavButtons } from "../NavButtons/NavButtons";

export const Layout = ({ children }) => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    // <div style={theme}>
    <div className="main container">
      <NavButtons />
      {children}
    </div>
    // </div>
  );
};
