import React from "react";
import * as Styled from "./styles";

export const TokenMainDetails = ({ data }) => {
  const { name, symbol, id } = data;
  return (
    <Styled.FlexSpacedV>
      <div>
        <div className="large-text">{symbol}</div>
        <div className="medium-text">{name}</div>
      </div>
      <div>
        <div className="detail-links">
          <a
            // target="_blank"
            href={`https://www.coingecko.com/en/coins/${id}`}
          >
            <img
              id="coingecko"
              src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
              alt=""
            />
          </a>
          <a
            // target="_blank"
            href={`https://etherscan.io/address/${id}`}
          >
            <img
              src="https://etherscan.io/images/logo-ether.png?v=0.0.2"
              alt=""
            />
          </a>
        </div>
      </div>
    </Styled.FlexSpacedV>
  );
};