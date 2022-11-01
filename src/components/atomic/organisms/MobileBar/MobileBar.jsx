import React from "react";
import * as Styled from "./styles";
import { UilCoins, UilWaterGlass } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
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
            <div>
              <Button>
                <NavLink onClick={handleChildClick} to={item.url}>
                  {/* <i>{item.icon}</i> */}

                  <span className="link hide">{item.title}</span>
                </NavLink>
              </Button>
            </div>
          </li>
        ))}
      </Styled.NavLinks>
    </Styled.MobileBar>
  );
};
