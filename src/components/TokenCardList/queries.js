import { gql } from "@apollo/client";
export const TOKENS = gql`
  query Tokens($filter: String,  $order: String , $itemsOnPage: Int) {
    tokens(first: $itemsOnPage, orderBy: $filter, orderDirection: $order) {
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
