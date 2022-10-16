import { gql } from "@apollo/client";
export const TOKEN_PAIRS = gql`
  query TokenDayDatas($id: String!) {
    pairs(
      orderBy: volumeUSD
      orderDirection: desc
      first: 4
      where: { token0: $id }
    ) {
      id
      volumeUSD
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
  }
`;
