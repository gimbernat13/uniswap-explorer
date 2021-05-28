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



// export const TOKEN_DETAILS = gql`
  // {
  //   token(id: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2") {
  //     name
  //     symbol
  //     decimals
  //     derivedETH
  //     tradeVolumeUSD
  //     totalLiquidity
  //   }
  // }
// `;
