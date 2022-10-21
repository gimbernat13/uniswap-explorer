import React from "react";
import * as Styled from "./styles";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import Tokens from "../../../../assets/bitcoin.png";
import { Button } from "components/atomic/atoms/Button/Button";
export const Sidebar = () => {
  let history = useHistory();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
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
  function handleChildClick(e) {
    e.stopPropagation();
  }

  return (
    <Styled.Sidebar
      onClick={toggleSidebarOpen}
      className={isSidebarOpen ? "expanded" : "shrink"}
    >
      {" "}
      <div style={{ marginLeft: "10px" }} className="icon">
        <Button width="40px" onClick={toggleSidebarOpen}>
          ←
        </Button>
      </div>
      <div className="sidebar-links shits">
        <div>
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.url} className="tooltip-element" data-tooltip="1">
                <div>
                  <NavLink onClick={handleChildClick} to={item.url}>
                    <div className="icon">
                      <i className="bx bx-bar-chart-square"></i>
                      <i className="bx bxs-bar-chart-square"></i>
                    </div>
                    <span className="link hide">{item.title}</span>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginLeft: "10px" }} className="icon">
          <Button width="40px" onClick={toggleSidebarOpen}>
            ←
          </Button>
        </div>
      </div>
    </Styled.Sidebar>
  );
};

{
  /* <Button width="50px"r onClick={() => history.goBack()}>
{item.icon}
</Button> */
}
