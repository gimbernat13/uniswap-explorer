import { gql } from "@apollo/client";

export const TOKENS = gql`
  query Tokens($skip: Int!, $first: Int!) {
    tokens(
      skip: $skip
      first: $first
      orderBy: txCount
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

