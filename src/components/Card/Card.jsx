import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Card = ({ children }) => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme} className="info-card">
      {children}
    </div>
  );
};
