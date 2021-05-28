import { gql } from "@apollo/client";

export const TOKEN_DETAILS = gql`
  query TokenDayDatas($id: String!) {
    tokenDayDatas(
      orderBy: date
      orderDirection: asc
      first: 2
      where: { token: $id }
    ) {
      id
      date
      priceUSD
      totalLiquidityToken
      totalLiquidityUSD
      totalLiquidityETH
      dailyVolumeETH
      dailyVolumeToken
      dailyVolumeUSD
    }
  }
`;
