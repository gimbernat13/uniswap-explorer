import { gql } from "@apollo/client";

export const PAIRS = gql`
  query Pairs($filter: String, $order: String, $itemsOnPage: Int) {
    pairs(first: 30, orderBy: txCount, orderDirection: desc) {
      id
      txCount
      volumeUSD
      reserveETH
      reserveUSD
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
    }
  }
`;
