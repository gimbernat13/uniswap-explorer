import React from "react";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../../atoms/Card/Card";
import * as Styled from "./styles";

export const TokenDetails = ({ data }) => {
  const { name, symbol, id , tradeVolumeUSD, derivedETH, txCount} = data;
  return (
    <Styled.DetailsGrid>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> Vol:</div>
        <div>
          ${formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))}
        </div>
      </Card>
    </Styled.DetailsGridItem>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> Liq:</div>
        <div>
          {formatNumber(parseFloat(derivedETH).toFixed(2))}{" "}
        </div>
      </Card>
    </Styled.DetailsGridItem>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> TX's:</div>
        <div>{formatNumber(parseFloat(txCount))}</div>
      </Card>
    </Styled.DetailsGridItem>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> TX's:</div>
        <div>{formatNumber(parseFloat(txCount))}</div>
      </Card>
    </Styled.DetailsGridItem>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> TX's:</div>
        <div>{formatNumber(parseFloat(txCount))}</div>
      </Card>
    </Styled.DetailsGridItem>
    <Styled.DetailsGridItem>
      <Card transparent height="100%">
        <div className="medium-text"> TX's:</div>
        <div>{formatNumber(parseFloat(txCount))}</div>
      </Card>
    </Styled.DetailsGridItem>
  </Styled.DetailsGrid>
  );
};
