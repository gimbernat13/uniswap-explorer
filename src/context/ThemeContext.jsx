import React from "react";
import { css } from "styled-components";
export const themes = {
  dark: css`
    background-color: "black";
    color: "white";
  `,
  light: css`
    background-color: "white";
    color: "black";
  `,
};

export const ThemeContext = React.createContext();
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
