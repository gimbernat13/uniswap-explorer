import { gql } from "@apollo/client";
export const PAIR_AGGREGATE = gql`
  query TokenDetails($id: String!) {
    pair(id: $id) {
      id
      reserve0
      reserve1
      liquidityProviderCount
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
    pairDayDatas(
      first: 100
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
  }
`;
