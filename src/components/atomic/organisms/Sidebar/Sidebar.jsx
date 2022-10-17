import React from "react";
import * as Styled from "./styles";
import { Link, useHistory, useParams } from "react-router-dom";
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
  console.log(useParams());
  return (
    <Styled.Sidebar
      onClick={toggleSidebarOpen}
      className={isSidebarOpen ? "expanded" : "shrink"}
    >
      <div className="sidebar-links shits">
        <div>
          <ul>
            {/* <Button width="100%" onClick={() => history.goBack()}>
            ←{" "}
          </Button> */}
            {sidebarItems.map((item) => (
              <li key={item.url} className="tooltip-element" data-tooltip="1">
                <Link to={item.url}>
                  <div className="icon">
                    <i className="bx bx-bar-chart-square"></i>
                    <i className="bx bxs-bar-chart-square"></i>
                  </div>
                  <span className="link hide">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="icon">
          <Button width="40px" onClick={toggleSidebarOpen}>
            ←
          </Button>
        </div> */}
      </div>
    </Styled.Sidebar>
  );
};

{
  /* <Button width="50px" onClick={() => history.goBack()}>
{item.icon}
</Button> */
}
