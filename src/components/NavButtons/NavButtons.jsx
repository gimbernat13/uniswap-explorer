import React from "react";
import { Link } from "react-router-dom";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import * as Styled from "./styles";
export const NavButtons = () => {
  return (
    <Styled.Flex>
      <Styled.NavFlex>
        <Styled.Link>
          <Link to="/tokens">Tokens</Link>
        </Styled.Link>
        <Styled.Link>
          <Link to="/liquidity">Pools</Link>
        </Styled.Link>
        <Styled.Link>
          <Link to="/pairs">Pairs</Link>
        </Styled.Link>
      </Styled.NavFlex>
    </Styled.Flex>
  );
};
