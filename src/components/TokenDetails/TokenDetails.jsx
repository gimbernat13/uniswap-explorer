import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import * as Styled from "./styles";
import { Loader } from "../Loader/Loader";
import { Card } from "../Card/Card";

export const TokenDetails = ({ tokenID }) => {
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID },
  });

  if (loading) return <Loader />;

  if (error) return `Error! ${error.message}`;

  const { name, symbol, tradeVolumeUSD, totalLiquidity, txCount } = data.token;
  return (
    <Styled.TokenDetailsGrid>
      <div>
        <Card height={""}>
          <h2>
            {name} ({symbol})
          </h2>
        </Card>
        <br />
        <Card>
          Total Trade Volume :$
          {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))} USD{" "}
        </Card>
      </div>
      <div>
          <Card>
            Total Trade Volume :$
            {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))} USD{" "}
          </Card>
          <Card>
            Total Liquidity: $
            {formatNumber(parseFloat(totalLiquidity).toFixed(2))}{" "}
          </Card>
          <Card>24h Transactions: {formatNumber(parseFloat(txCount))}</Card>
          <Card>24h TX: {formatNumber(parseFloat(txCount))}</Card>
      </div>
    </Styled.TokenDetailsGrid>
  );
};
