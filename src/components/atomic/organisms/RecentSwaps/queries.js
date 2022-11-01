import { gql } from '@apollo/client';

export const RECENT_SWAPS = gql`
  query RecentSwaps(
    $filter: String
    $order: String
    $itemsOnPage: Int
    $id: String!
  ) {
    swaps(
      first: 3
      orderBy: timestamp
      orderDirection: desc
      where: { pair: $id  }
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
