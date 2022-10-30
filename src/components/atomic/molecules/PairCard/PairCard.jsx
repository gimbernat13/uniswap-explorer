import React from "react";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../../atoms/Card/Card";
import * as Styled from "./styles";
import { UilExchange } from "@iconscout/react-unicons";
import { Button } from "components/atomic/atoms/Button/Button";
import Modal from "../Modal/Modal";
// import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

export const PairCard = ({ pair }) => {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const animatedItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      {/* <Card transparent variants={animatedItem}> */}
      <Card transparent variants={animatedItem}>
        <Styled.PoolCard key={pair.id}>
          <Styled.PoolCardInner>
            <div className="medium-text">
              {pair.token0.symbol} - {pair.token1.symbol}
            </div>
            {/* <div>{pair.txCount} Tx's</div> */}
            <div>${formatNumber(parseInt(pair.volumeUSD))}</div>
          </Styled.PoolCardInner>
        </Styled.PoolCard>
      </Card>
    </>
  );
};
