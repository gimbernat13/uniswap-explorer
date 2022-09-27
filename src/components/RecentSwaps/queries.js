import { gql } from "@apollo/client";

export const RECENT_SWAPS = gql`
  query RecentSwaps($filter: String, $order: String, $itemsOnPage: Int) {
    swaps(
      orderBy: timestamp
      orderDirection: desc
      where: { pair: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11" }
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
