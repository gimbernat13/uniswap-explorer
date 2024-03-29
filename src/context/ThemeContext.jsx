import React from "react";

export const ThemeContext = React.createContext();
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
