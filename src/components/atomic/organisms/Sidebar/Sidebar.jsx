import React, { useRef, useState } from "react";
import * as Styled from "./styles";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import Tokens from "../../../../assets/bitcoin.png";
import { Button } from "components/atomic/atoms/Button/Button";
import { useOnClickOutside } from "context/useOnClickOutside";
import { UilCoins, UilWaterGlass } from "@iconscout/react-unicons";

export const Sidebar = () => {
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
  const ref = useRef();
  useOnClickOutside(ref, () => setIsSidebarOpen(false));
  return (
    <Styled.Sidebar
      ref={ref}
      onClick={toggleSidebarOpen}
      className={isSidebarOpen ? "expanded" : "shrink"}
    >
      {" "}
      <div style={{ marginLeft: "10px" }} className="icon">
        {/* <Button width="40px" onClick={toggleSidebarOpen}>
          ←
        </Button> */}
      </div>
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
