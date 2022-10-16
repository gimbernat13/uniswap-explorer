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
    <Styled.Sidebar className={isSidebarOpen ? "expanded" : "shrink"}>
      <div className="sidebar-links">
        <li className="tooltip-element" onClick={toggleSidebarOpen}>
          ¡Toggle
        </li>
        <ul>
          <div className="active-tab"></div>

          {sidebarItems.map((item) => (
            <li key={item.url} className="tooltip-element" data-tooltip="1">
              <Link to={item.url}>
                <div className="icon">
                  <i className="bx bx-bar-chart-square"></i>
                  <i className="bx bxs-bar-chart-square"></i>
                </div>
                <span className="link hide">Projects</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Styled.Sidebar>
  );
};

{
  /* <Button width="50px" onClick={() => history.goBack()}>
{item.icon}
</Button> */
}
