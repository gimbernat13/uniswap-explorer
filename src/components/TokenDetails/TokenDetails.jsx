import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import { TokenContext } from "../../context/TokenContext";

export const TokenDetails = (props) => {
  const { tokenId } = useContext(TokenContext);

  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenId },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { name, symbol, tradeVolumeUSD, totalLiquidity, txCount } = data.token;
  return (
    <div>
      <h2>
        {name} ({symbol})
      </h2>
      <ul>
        <li>
          Total Trade Volume :$
          {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))} USD{" "}
        </li>
        <li>
          Total Liquidity: $
          {formatNumber(parseFloat(totalLiquidity).toFixed(2))}{" "}
        </li>
        <li>24h Transactions: {formatNumber(parseFloat(txCount))}</li>
      </ul>

      <div className="detail-links">
        <a
          target="_blank"
          href={`https://www.coingecko.com/en/coins/${tokenId}`}
        >
          <img
            id="coingecko"
            src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
            alt=""
          />
        </a>
        <a target="_blank" href={`https://etherscan.io/address/${tokenId}`}>
          <img
            src="https://etherscan.io/images/logo-ether.png?v=0.0.2"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
