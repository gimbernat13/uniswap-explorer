import { gql } from "@apollo/client";
export const PAIR_DAY_DATAS = gql`
  query PairDayDatas($id: String!) {
    pairDayDatas(
      first: 100
      orderBy: date
      orderDirection: desc
      where: { pairAddress: $id, date_gt: 1592505859 }
    ) {
      dailyTxns
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      date
      dailyVolumeToken0
      dailyVolumeToken1
      dailyVolumeUSD
      reserveUSD
    }
  }
`;
