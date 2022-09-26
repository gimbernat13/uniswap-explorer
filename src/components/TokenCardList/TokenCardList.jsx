import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TokensContext } from "../../context/TokensContext";
import { TokenCard } from "../TokenCard/TokenCard";
import { TOKENS } from "./queries";
import * as Styled from "./styles";

export const TokenCardList = (props) => {
  const { state: tokensState } = useContext(TokensContext);

  const { loading, error, data } = useQuery(TOKENS, {
    variables: {
      filter: tokensState.filterBy,
      order: tokensState.sortBy,
      itemsOnPage: tokensState.itemsOnPage,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Styled.TokenGrid>
      {data.tokens.map((token, i) => {
        return <TokenCard index={i + 1} token={token} />;
      })}
    </Styled.TokenGrid>
  );
};
