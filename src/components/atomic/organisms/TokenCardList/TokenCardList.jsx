import { TokenCard } from "components/atomic/molecules/TokenCard/TokenCard";
import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import { Card } from "components/atomic/atoms/Card/Card";

export const TokenCardList = ({ data = [] }) => {
  return (
    <Card noPadding>
    <Styled.TokenGrid>
      {data.tokens.map((token, i) => {
        return (
          <Link to={`/tokens/${token.id}`}>
            <TokenCard index={i + 1} token={token} />
          </Link>
        );
      })}
    </Styled.TokenGrid>
    </ Card>
  );
};
