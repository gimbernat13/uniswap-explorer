import React from "react";
import { Link } from "react-router-dom";
import { Button as StyledButton } from "../Button/styles";
import * as Styled from "./styles";

export const NavButtons = () => {
  return (
    <Styled.Flex>
      <Styled.NavFlex>
        <StyledButton>
          <Link to="/tokens">Tokens</Link>
        </StyledButton>
        {/* <Styled.Link>
          <Link to="/liquidity">Pools</Link>
        </Styled.Link> */}
        <StyledButton>
          <Link to="/pairs">Pairs</Link>
        </StyledButton>
      </Styled.NavFlex>
    </Styled.Flex>
  );
};
