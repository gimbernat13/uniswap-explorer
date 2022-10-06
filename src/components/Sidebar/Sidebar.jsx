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
      
    }
  ]
  return (
    <Styled.Sidebar width={!isSidebarOpen ? "var(--sidebar-margin)" : "200px"}>
      <ul>
        <li>
          <Button width="50px" onClick={toggleSidebarOpen}>
            {" "}
            {isSidebarOpen ? "←" : "→"}{" "}
          </Button>
        </li>
        <li>
          <Button width="50px" onClick={() => history.goBack()}>
            {" "}
            🔙{" "}
          </Button>
        </li>
        <li>
          <Button width="50px">
            <Link to="/tokens">🪙</Link>
          </Button>
        </li>
        <li>
          {" "}
          <Button width="50px">
            <Link to="/pairs">💸</Link>
          </Button>
        </li>
      </ul>
    </Styled.Sidebar>
  );
};
