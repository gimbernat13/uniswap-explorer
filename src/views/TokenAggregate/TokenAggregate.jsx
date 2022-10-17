import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { TokenPairs } from "../../components/atomic/organisms/TokenPairs/TokenPairs";
import { Button } from "../../components/Button/Button";
import { SwapWidget } from "@uniswap/widgets/dist/index.js";
import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import { setSelectedToken } from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { useQuery } from "@apollo/client";
import { Loader } from "../../components/atomic/atoms/Loader/Loader";
import { TOKEN_DETAILS } from "./queries";
import Modal from "../../components/atomic/molecules/Modal/Modal";
import { darkTheme, lightTheme } from "@uniswap/widgets";
import Chart from "../../components/atomic/organisms/Chart/Chart";
import { TokenMainDetails } from "../../components/atomic/molecules/TokenMainDetails/TokenMainDetails";
import { TokenDetails } from "../../components/atomic/molecules/TokenDetails/TokenDetails";

export const TokenAggregate = () => {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const { tokenID } = useParams();
  const { dispatch } = useContext(TokensContext);

  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID },
  });

  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tokenID]);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const { id } = data.token;
  return (
    <>
      <Modal ref={modalRef}>
        <SwapWidget
          defaultOutputTokenAddress={id}
          theme={true ? darkTheme : lightTheme}
        />
      </Modal>
      <Styled.TokenAggregateGrid>
        <Styled.LeftGrid>
          <Styled.LeftTopGrid>
            <Card flex height={"100%"}>
              <TokenMainDetails data={data.token} />
            </Card>
            <Card height={"100%"}>
              <TokenDetails data={data.token} />
            </Card>
          </Styled.LeftTopGrid>
          <Card>
            <h3>Price</h3>
            <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} />
          </Card>
        </Styled.LeftGrid>
        <Styled.RightGrid>
          <Card>
            <div className="medium-text">Top Pairs</div>
            <TokenPairs data={data.pairs} />
          </Card>
          <Button width="100%" onClick={openModal}>
            Trade
          </Button>
        </Styled.RightGrid>
      </Styled.TokenAggregateGrid>
    </>
  );
};
