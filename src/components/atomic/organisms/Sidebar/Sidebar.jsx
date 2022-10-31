import React, { useRef } from "react";
import * as Styled from "./styles";
import { NavLink } from "react-router-dom";
import { Button } from "components/atomic/atoms/Button/Button";
import { useOnClickOutside } from "context/useOnClickOutside";
import { UilCoins, UilWaterGlass } from "@iconscout/react-unicons";

export const Sidebar = ({ theme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
    e.stopPropagation();
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
      <div className="sidebar-links shits">
        {sidebarItems.map((item) => (
          <div key={item.url}>
            <div>
              <NavLink onClick={handleChildClick} to={item.url}>
                <div className="icon">
                  {/* <Button> {item.icon}</Button> */}
                  <i>{item.icon}</i>
                  <i> {item.icon}</i>
                </div>
                <span className="link hide">{item.title}</span>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Button onClick={handleToggleTheme}>
        {theme === "dark" ? "☼" : "☽"}
      </Button>
    </Styled.Sidebar>
  );
};
