import React from "react";
import formatNumber from "../../utils/formatNumber";
import { Card } from "../Card/Card";
import Modal from "../Modal/Modal";
import * as Styled from "./styles";
import { SwapWidget } from "@uniswap/widgets/dist/index.js";

import { darkTheme, lightTheme } from "@uniswap/widgets";
import { Button } from "../Button/Button";

export const PairCard = ({ pair }) => {
  const animatedItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };
  console.log("pair ", pair);
  return (
    <>
      <Modal ref={modalRef}>
        <SwapWidget
          defaultInputTokenAddress={pair.token0.id}
          defaultOutputTokenAddress={pair.token1.id}
          theme={true ? darkTheme : lightTheme}
        />
        {/* <button onClick={() => modalRef.current.close()}>Close Modal</button> */}
      </Modal>
      <Card transparent variants={animatedItem}>
        <Styled.PoolCard key={pair.id}>
          <Styled.PoolCardInner>
            <div className="medium-text">
              {pair.token0.symbol} - {pair.token1.symbol}
            </div>
            {/* <div>{pair.txCount} Tx's</div> */}
            <div>V: ${formatNumber(parseInt(pair.volumeUSD))}</div>
          </Styled.PoolCardInner>
          <Button onClick={openModal}>Trade</Button>
        </Styled.PoolCard>
      </Card>
    </>
  );
};
