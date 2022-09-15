import { gql } from "@apollo/client";
export const TOKENS = gql`
  query Tokens($filter: String) {
    tokens(
      first: 150
      orderBy: $filter
      orderDirection: desc
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
