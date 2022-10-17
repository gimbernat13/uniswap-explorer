import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";
import { Button } from "../../components/Button/Button";
import { SwapWidget } from "@uniswap/widgets/dist/index.js";
import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import { setSelectedToken } from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { useQuery } from "@apollo/client";
import { Loader } from "../../components/Loader/Loader";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import Modal from "../../components/Modal/Modal";
import { darkTheme, lightTheme } from "@uniswap/widgets";

export const TokenAggregate = () => {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };
  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID },
  });
  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tokenID]);
  if (loading) return <Loader />;

  if (error) return `Error! ${error.message}`;
  const { name, symbol, tradeVolumeUSD, totalLiquidity, txCount } = data.token;
  return (
    <>
      <Modal ref={modalRef}>
        <SwapWidget
          defaultOutputTokenAddress={tokenID}
          theme={true ? darkTheme : lightTheme}
        />
        {/* <button onClick={() => modalRef.current.close()}>Close Modal</button> */}
      </Modal>
      <Styled.TokenAggregateGrid>
        <Styled.LeftGrid>
          <Styled.LeftTopGrid>
            <Card>
              <div className="large-text">{symbol}</div>
              <div className="medium-text">{name}</div>
              <div className="detail-links">
                <a
                  target="_blank"
                  // href={`https://www.coingecko.com/en/coins/${tokenId}`}
                >
                  <img
                    id="coingecko"
                    src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
                    alt=""
                  />
                </a>
                <a
                  target="_blank"
                  // href={`https://etherscan.io/address/${tokenId}`}
                >
                  <img
                    src="https://etherscan.io/images/logo-ether.png?v=0.0.2"
                    alt=""
                  />
                </a>
              </div>
            </Card>
            <Card height={"100%"}>
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
                      {formatNumber(parseFloat(totalLiquidity).toFixed(2))}{" "}
                    </div>
                  </Card>
                </Styled.DetailsGridItem>
                <Styled.DetailsGridItem>
                  <Card transparent height="100%">
                    <div className="medium-text"> TX's:</div>
                    <div>{formatNumber(parseFloat(txCount))}</div>
                  </Card>
                </Styled.DetailsGridItem>
              </Styled.DetailsGrid>
            </Card>
          </Styled.LeftTopGrid>

          <Card>
            <h3>Price</h3>
            <TokenChart />
          </Card>
        </Styled.LeftGrid>

        <Styled.RightGrid>
          <Card>
            <div className="medium-text">Top Pairs</div>
            <TokenPairs />
          </Card>

          <Button width="100%" onClick={openModal}>
            Trade
          </Button>
        </Styled.RightGrid>
      </Styled.TokenAggregateGrid>
    </>
  );
};
