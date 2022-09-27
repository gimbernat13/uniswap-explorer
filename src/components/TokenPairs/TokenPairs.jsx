import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_PAIRS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import formatNumber from "../../utils/formatNumber";

export const TokenPairs = () => {
  const { tokenId } = useContext(TokenContext);
  const { loading, error, data } = useQuery(TOKEN_PAIRS, {
    variables: { id: tokenId },
  });
  if (loading) return <div className="pairs"> Loading... </div>;
  if (error) return `Error! ${error.message}`;
  return (
    <div className="pairs">
      <h3> Top 3 Trading Pairs (Volume) </h3>
      {data.pairs.map((pair) => (
        <div className="pair-card">
          <div className="pair">{pair.token0.symbol}</div>

          <div className="pair"> {pair.token1.symbol}</div>
          <div className="pair">
            ${formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}
          </div>
        </div>
      ))}
    </div>
  );
};
