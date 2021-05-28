import React from "react";

export const Button = ({ clicked }) => {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={theme}
      onClick={clicked}
      className={`button ${filterBy === filter.id ? "active" : ""}`}
    >
      {filter.name}
    </div>
  );
};
