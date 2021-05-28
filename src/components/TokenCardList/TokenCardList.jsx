import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import formatNumber from "../../utils/formatNumber";
import { TokenCard } from "../TokenCard/TokenCard";
import { TOKENS } from "./queries";

export const TokenCardList = (props) => {
  const { setData, tokenId, filterBy } = useContext(TokenContext);

  const { loading, error, data } = useQuery(TOKENS, {
    variables: { filter: filterBy },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="token-card-list">
      {data.tokens.map((token, i) => {
        return <TokenCard index={i + 1} token={token} />;
      })}
    </div>
  );
};
