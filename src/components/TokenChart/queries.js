import { gql } from "@apollo/client";

export const TOKEN_DETAILS = gql`
  query TokenDayDatas($id: String!, $numberOfItems: Number!) {
    tokenDayDatas(
      orderBy: date
      orderDirection: desc
      first: $numberOfItems
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
