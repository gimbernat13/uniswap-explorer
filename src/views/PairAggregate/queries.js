import { gql } from "@apollo/client";
export const PAIR_AGGREGATE = gql`
  query TokenDetails($id: String!) {
    pairDayDatas(
      first: 100
      orderBy: date
      orderDirection: desc
      where: { pairAddress: $id, date_gt: 1592505859 }
    ) {
      date
      dailyVolumeToken0
      dailyVolumeToken1
      dailyVolumeUSD
      reserveUSD
    }
  }
`;
