import { gql } from "@apollo/client";
export const TOKEN_DETAILS = gql`
  query TokenDetails($id: String!) {
    token(id: $id) {
      name
      symbol
      derivedETH
      tradeVolumeUSD
      totalLiquidity
      txCount
      
    }
  }
`;

