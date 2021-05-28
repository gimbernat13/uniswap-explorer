import React from 'react'
export const themes = {
    dark : {
        backgroundColor: "black",
        color: "white",
    },
    light: {
        backgroundColor: "white",
        color: "black",
    }
}
export const ThemeContext = React.createContext();
export const ThemeContextProvider = ({ children }) => {

  const [ theme,  setTheme] = React.useState(themes.dark);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme,  themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
