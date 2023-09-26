import { gql } from "@apollo/client";

export const PAIRS = gql`
  query Pairs($order: String = "reserveUSD", $itemsOnPage: Int = 30) {
    pairs(first: $itemsOnPage, orderBy: $order, orderDirection: desc) {
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
