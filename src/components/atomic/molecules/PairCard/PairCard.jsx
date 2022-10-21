import React from "react";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../../atoms/Card/Card";
import * as Styled from "./styles";
import { UilExchange } from "@iconscout/react-unicons";
import { Button } from "components/atomic/atoms/Button/Button";
export const PairCard = ({ pair }) => {
  const animatedItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <Card transparent variants={animatedItem}>
        <Styled.PoolCard key={pair.id}>
          <Styled.PoolCardInner>
            <div className="medium-text">
              {pair.token0.symbol} - {pair.token1.symbol}
            </div>
            <div>{pair.txCount} Tx's</div>
            <div>${formatNumber(parseInt(pair.volumeUSD))}</div>
            <Button>
              Trade
              <UilExchange size={15} />
            </Button>
          </Styled.PoolCardInner>
        </Styled.PoolCard>
      </Card>
    </>
  );
};
