import { gql } from '@apollo/client';

export const TOKEN_DETAILS = gql`
  query TokenDetails($id: String!, $timeFrame: Int!) {
    token(id: $id) {
      name
      symbol
      derivedETH
      tradeVolumeUSD
      totalLiquidity
      txCount
    }
    pairs(
      orderBy: volumeUSD
      orderDirection: desc
      first: 5
      where: { token0: $id }
    ) {
      id
      volumeUSD
      txCount
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
    tokenDayDatas(
      orderBy: date
      orderDirection: desc
      first: $timeFrame
      where: { token: $id }
    ) {
      id
      date
      priceUSD
      totalLiquidityToken
      totalLiquidityUSD
      totalLiquidityETH
      dailyVolumeETH
      dailyVolumeToken
      dailyVolumeUSD
      dailyTxns
    }
  }
`;
