import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import * as Styled from "./styles";
import { Loader } from "../Loader/Loader";
import { Card } from "../Card/Card";
import { TokenChart } from "../TokenChart/TokenChart";

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
        <Card>
          <h2>
            {name} ({symbol})
          </h2>
        </Card>
        <br />
        <Card>
          V:
          {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))} USD
        </Card>
        <Card>
          L:
          {formatNumber(parseFloat(totalLiquidity).toFixed(2))} USD
        </Card>
      </div>
      <div>
        <Card>
          <div>Price USD (100 days) </div>
          <TokenChart numberOfItems={50} />
        </Card>
      </div>
    </Styled.TokenDetailsGrid>
  );
};
