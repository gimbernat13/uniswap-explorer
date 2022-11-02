import React from 'react';
import { css } from 'styled-components';

export const ThemeContext = React.createContext();
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
