import { gql } from "@apollo/client";
export const PAIR_AGGREGATE = gql`
  query TokenDetails($id: String!) {
    pair(id: $id) {
      id
      reserve0
      reserve1
      reserveUSD
      liquidityProviderCount
      volumeUSD
      totalSupply
      token0 {
        symbol
        id
      }
      token1 {
        symbol
        id
      }
    }
    pairDayDatas(
      first: 30
      orderBy: date
      orderDirection: desc
      where: { pairAddress: $id, date_gt: 1592505859 }
    ) {
      dailyTxns
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      date
      dailyVolumeToken0
      dailyVolumeToken1
      dailyVolumeUSD
      reserveUSD
    }
    swaps(
      first: 5
      orderBy: timestamp
      orderDirection: desc
      where: { pair: $id }
    ) {
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      amount0In
      amount0Out
      amount1In
      amount1Out
      amountUSD
      to
    }
  }
`;
