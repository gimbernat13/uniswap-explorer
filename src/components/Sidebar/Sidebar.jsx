import React from "react";
import * as Styled from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button/Button";
import Tokens from "../../assets/bitcoin.png";
export const Sidebar = () => {
  let history = useHistory();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    // {
    //   title: "Home",
    //   icon: "🏠",
    //   url: "/",
    // },
    {
      title: "Tokens",
      icon: Tokens,
      url: "/tokens",
    },
    {
      title: "Pairs",
      icon: Tokens,
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
                <img style={{ height: "20px" }} src={item.icon} alt="" />{" "}
                <div className={!isSidebarOpen ? "hidden" : "shown open"}>
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
