import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button as StyledButton } from '../Button/styles';
import * as Styled from './styles';

export function NavButtons() {
  const history = useHistory();

  return (
    <Styled.Flex>
      <Styled.NavFlex>
        <StyledButton onClick={() => history.goBack()}> 🔙 </StyledButton>

        <StyledButton>
          <Link to="/tokens">Tokens</Link>
        </StyledButton>
        <StyledButton>
          <Link to="/pairs">Pairs</Link>
        </StyledButton>
      </Styled.NavFlex>
    </Styled.Flex>
  );
}
