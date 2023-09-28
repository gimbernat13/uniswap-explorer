import React from "react";
import * as Styled from "./styles";
import { NavLink } from "react-router-dom";
import { UilCoins, UilWaterGlass } from "@iconscout/react-unicons";
import { Button } from "../NavButtons/styles";

export const MobileBar = () => {
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
  
  return (
    <Styled.MobileBar>
      <Styled.NavLinks>
        {sidebarItems.map((item) => (
          <li key={item.url}>
            <Button>
              <NavLink onClick={handleChildClick} to={item.url}>
                <span className="link hide">{item.title}</span>
              </NavLink>
            </Button>
          </li>
        ))}
      </Styled.NavLinks>
    </Styled.MobileBar>
  );
};
