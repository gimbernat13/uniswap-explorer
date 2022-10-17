import { Sidebar } from "components/atomic/organisms/Sidebar/Sidebar";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
export const Layout = ({ children }) => {
  // const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    // <div style={theme}>
    <>
      <Sidebar />
      <div className="main container">{children}</div>
    </>

    // </div>
  );
};
