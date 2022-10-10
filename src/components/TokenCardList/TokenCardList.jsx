import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import { TokenCard } from "../TokenCard/TokenCard";
import { TOKENS } from "./queries";
import * as Styled from "./styles";
import { BarLoader } from "react-spinners";
import { Loader } from "../Loader/Loader";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export const TokenCardList = (props) => {
  const { state: tokensState } = useContext(TokensContext);

  const { loading, error, data } = useQuery(TOKENS, {
    variables: {
      filter: tokensState.filterBy,
      order: tokensState.sortBy,
      itemsOnPage: tokensState.itemsOnPage,
    },
  });

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  return (
    <Styled.TokenGrid variants={container} initial="hidden" animate="show">
      {data.tokens.map((token, i) => {
        return (
          <Link to={`/tokens/${token.id}`}>
            <TokenCard index={i + 1} token={token} />
          </Link>
        );
      })}
    </Styled.TokenGrid>
  );
};
