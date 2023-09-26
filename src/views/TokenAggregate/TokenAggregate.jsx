import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { SwapWidget, darkTheme } from '@uniswap/widgets';
import { useParams } from 'react-router-dom';
import { TokenPairs } from 'components/atomic/organisms/TokenPairs/TokenPairs';
import Modal from 'components/atomic/molecules/Modal/Modal';
import { TokenMainDetails } from 'components/atomic/molecules/TokenMainDetails/TokenMainDetails';
import { TokenDetails } from 'components/atomic/molecules/TokenDetails/TokenDetails';
import { Card } from 'components/atomic/atoms/Card/Card';
import Chart from 'components/atomic/organisms/Chart/Chart';
import { Button } from 'components/atomic/atoms/Button/Button';
import { BarLoader } from 'react-spinners';
import { TOKEN_DETAILS } from './queries';
import { TokensContext } from '../../context/TokensContext';
import { setSelectedToken } from '../../context/actionNames';
import * as Styled from './styles';
import PoopChart from 'components/atomic/organisms/PoopChart/Chart';

export function TokenAggregate() {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);

  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID, timeFrame: tokensState.timeFrame.id },
  });

  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch, tokenID]);
  if (loading) return <BarLoader color="#828bdd" />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Modal ref={modalRef}>
        <SwapWidget defaultOutputTokenAddress={tokenID} theme={darkTheme} />
      </Modal>
      <Styled.TokenAggregateGrid>
        <Styled.LeftGrid>
          <Styled.LeftTopGrid>
            <Card flex>
              <TokenMainDetails data={data.token} />
            </Card>
            <Card height="100%">
              <TokenDetails
                tokenData={data.token}
                tokenDayDatas={data.tokenDayDatas[0]}
              />
            </Card>
          </Styled.LeftTopGrid>
          <Styled.Chart>
            <Card>
              {/* <Chart chartData={data.tokenDayDatas} yKey="priceUSD" /> */}
              {/* <Chart chartData={data.tokenDayDatas} yKey="volumeUSD" /> */}
              <PoopChart />
            </Card>
          </Styled.Chart>
        </Styled.LeftGrid>
        <Styled.RightGrid>
          <Card flex>
            <TokenPairs data={data.pairs} />
          </Card>
          <Button isActive width="100%" onClick={openModal}>
            Trade
          </Button>
        </Styled.RightGrid>
      </Styled.TokenAggregateGrid>
    </>
  );
}
