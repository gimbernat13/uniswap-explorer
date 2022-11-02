import { TokenCard } from 'components/atomic/molecules/TokenCard/TokenCard';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export function TokenCardList({ data }) {
  return (
    <Styled.TokenGrid>
      {data.tokens.map((token, i) => (
        <Link to={`/tokens/${token.id}`}>
          <TokenCard index={i + 1} token={token} />
        </Link>
      ))}
    </Styled.TokenGrid>
  );
}
