import { TokenCard } from "components/atomic/molecules/TokenCard/TokenCard";
import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import { Card } from "components/atomic/atoms/Card/Card";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import formatNumber from 'utils/formatNumber';

export const TokenCardList = ({ data = [] }) => {
  const location = useLocation();
  const tokenIdFromUrl = location.pathname.split("/").pop();
  return (
    <Styled.TokenGrid>
      {data.tokens.map((token, i) => {
        const isActive = token.id === tokenIdFromUrl;
        return (
          <Link to={`/tokens/${token.id}`}>
            <Card variant={isActive ? "cool" : "gradient"} isActive={isActive}>
              {/* <div className="symbol bold large">{index}</div> */}
              <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
              <div className="symbol">
                $
                {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))}
              </div>
              <div className="symbol">
                $
                {formatNumber(parseFloat(token.reserveUSD).toFixed(2))}
              </div>
            </Card>
            <TokenCard isActive index={i + 1} token={token} />
          </Link>
        );
      })}
    </Styled.TokenGrid>
  );
};
