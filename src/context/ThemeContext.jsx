import React from 'react';

export const ThemeContext = React.createContext();
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  // const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const memoizedValues = React.useMemo(() => ({ theme, toggleTheme }), []);

  return (
    <ThemeContext.Provider value={memoizedValues}>
      {children}
    </ThemeContext.Provider>
  );
}
