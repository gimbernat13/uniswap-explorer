import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import { Card } from "components/atomic/atoms/Card/Card";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import formatNumber from 'utils/formatNumber';

export const TokenCardList = ({ data }) => {
  const location = useLocation();
  const tokenIdFromUrl = location.pathname.split("/").pop();
  return (
    <Styled.TokenGrid>
      {data.map((token, i) => {
        const isActive = token.id === tokenIdFromUrl;
        return (
          <Link to={`/tokens/${token.id}`}>
            <Card  variant={isActive ? "cool" : "gradient"} isActive={isActive}>
              <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
              <div className="symbol">
                Vol : $ 
                {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))}
              </div>
            </Card>
          </Link>
        );
      })}
    </Styled.TokenGrid>
  );
};
