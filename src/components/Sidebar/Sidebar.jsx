import React from "react";
import * as Styled from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button/Button";

export const Sidebar = () => {
  let history = useHistory();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    {
      title: "Home",
      icon: "🏠",
      url: "/",
    },
    {
      title: "Tokens",
      icon: "🪙",
      url: "/tokens",
    },
    {
      title: "Pairs",
      icon: "💰",

      url: "/pairs",
    },
  ];
  return (
    <Styled.Sidebar width={!isSidebarOpen ? "var(--sidebar-margin)" : "250px"}>
      <ul>
        <li>
          <Button width="50px" onClick={toggleSidebarOpen}>
            {isSidebarOpen ? "←" : "→"}{" "}
          </Button>
        </li>
        {sidebarItems.map((item, i) => {
          return (
            <Link to={item.url}>
              <li>
                <Button width="50px">{item.icon} </Button>
                <div className={!isSidebarOpen ? "hidden" : "shown"}>
                  {item.title}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </Styled.Sidebar>
  );
};

{
  /* <Button width="50px" onClick={() => history.goBack()}>
{item.icon}
</Button> */
}
