import React, { useContext } from "react";
import * as Styled from "./styles";
import { useQuery } from "@apollo/client";
import { SwapWidget, darkTheme, lightTheme } from "@uniswap/widgets";
import { useParams } from "react-router-dom";
import { setSelectedToken } from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { TOKEN_DETAILS } from "./queries";
import { TokenPairs } from "components/atomic/organisms/TokenPairs/TokenPairs";
import Modal from "components/atomic/molecules/Modal/Modal";
import { TokenMainDetails } from "components/atomic/molecules/TokenMainDetails/TokenMainDetails";
import { TokenDetails } from "components/atomic/molecules/TokenDetails/TokenDetails";
import { Card } from "components/atomic/atoms/Card/Card";
import Chart from "components/atomic/organisms/Chart/Chart";
import { Loader } from "components/atomic/atoms/Loader/styles";
import { Button } from "components/atomic/atoms/Button/Button";
import { BarLoader } from "react-spinners";
export const TokenAggregate = () => {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);

  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID, timeFrame: tokensState.timeFrame },
  });

  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tokenID]);
  if (loading) return <BarLoader color="#828bdd" />;
  if (error) return `Error! ${error.message}`;

  // const { id } = data.token;
  return (
    <>
      {window.screen.width}
      <Modal ref={modalRef}>
        <SwapWidget defaultOutputTokenAddress={tokenID} theme={darkTheme} />
      </Modal>
      <Styled.TokenAggregateGrid>
        <Styled.LeftGrid>
          <Styled.LeftTopGrid>
            <Card flex height={"100%"}>
              <TokenMainDetails data={data.token} />
            </Card>
            <Card height={"100%"}>
              <TokenDetails
                tokenData={data.token}
                tokenDayDatas={data.tokenDayDatas[0]}
              />
            </Card>
          </Styled.LeftTopGrid>
          <Card>
            {/* <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} /> */}
          </Card>
        </Styled.LeftGrid>
        <Styled.RightGrid>
          <Card>
            <TokenPairs data={data.pairs} />
          </Card>
          <Button isActive width="100%" onClick={openModal}>
            Trade
          </Button>
        </Styled.RightGrid>
      </Styled.TokenAggregateGrid>
    </>
  );
};
