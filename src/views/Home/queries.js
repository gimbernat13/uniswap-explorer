import { gql } from "@apollo/client";
export const UNISWAP = gql`
  query Uniswap($filter: String) {
    tokens(
      first: 150
      orderBy: $filter
      orderDirection: desc
      where: { tradeVolumeUSD_gt: 20000 , txCount_gt : 500 }
    ) {
      id
      symbol
      name
      tradeVolume
      txCount
      tradeVolumeUSD
      totalLiquidity
    }
  }
`;
