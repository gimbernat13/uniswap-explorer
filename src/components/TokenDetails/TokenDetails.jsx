import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import { BarLoader } from "react-spinners";
import ContentLoader from "react-content-loader";

export const TokenDetails = ({ tokenID }) => {
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID },
  });

  if (loading)
    return (
      <ContentLoader
        speed={2}
        width={"700px"}
        height={"100%"}
        viewBox="0 0 800 460"
        backgroundColor="#68686835"
        foregroundColor="#0e0e0e79"
      >
        {/* <circle cx="31" cy="31" r="15" /> */}
        <rect x="0" y="0" rx="1rem" ry="1rem" width="240" height="90px" />
        <rect
          x="0"
          y="100"
          rx="1rem"
          ry="1rem"
          borderRadius
          width="800"
          height="400"
        />
      </ContentLoader>
    );

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
          href={`https://www.coingecko.com/en/coins/${tokenID}`}
        >
          <img
            id="coingecko"
            src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
            alt=""
          />
        </a>
        <a target="_blank" href={`https://etherscan.io/address/${tokenID}`}>
          <img
            src="https://etherscan.io/images/logo-ether.png?v=0.0.2"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
