import React, { useContext, useRef } from "react";
import * as Styled from "./styles";
import { NavLink } from "react-router-dom";
import { Button } from "components/atomic/atoms/Button/Button";
import { useOnClickOutside } from "context/useOnClickOutside";
import { UilCoins, UilWaterGlass } from "@iconscout/react-unicons";
import { ThemeContext } from "styled-components";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { toggleTheme, theme } = useContext(ThemeContext);
  const sidebarItems = [
    {
      title: "Tokens",
      icon: <UilCoins size={20} />,
      url: "/tokens",
    },
    {
      title: "Pairs",
      icon: <UilWaterGlass size={20} />,
      url: "/pairs",
    },
  ];
  function handleChildClick(e) {
    e.stopPropagation();
  }
  function handleToggleTheme(e) {
    toggleTheme();
  }
  const ref = useRef();
  useOnClickOutside(ref, () => setIsSidebarOpen(false));
  return (
    <Styled.Sidebar
      ref={ref}
      onClick={toggleSidebarOpen}
      className={isSidebarOpen ? "expanded" : "shrink"}
    >
      <Button onClick={handleToggleTheme}> ☽</Button>

      <div className="sidebar-links shits">
        <div>
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.url}>
                <div>
                  <NavLink onClick={handleChildClick} to={item.url}>
                    <div className="icon">
                      <i>{item.icon}</i>
                      <i> {item.icon}</i>
                    </div>
                    <span className="link hide">{item.title}</span>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Styled.Sidebar>
  );
};
