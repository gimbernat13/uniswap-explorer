import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Layout = ({ children }) => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    // <div style={theme}>
      <div className="main">
        {children}
      </div>
    // </div>
  );
};
