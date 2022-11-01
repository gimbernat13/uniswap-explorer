import { gql } from '@apollo/client';

export const TOKENS = gql`
  query Tokens {
    tokens(
      first: 150
      orderBy: txCount
      orderDirection: desc
    ) # where: { tradeVolumeUSD_gt: 20000, txCount_gt: 500 }
    {
      id
      symbol
      name
      tradeVolume
      txCount
      tradeVolumeUSD
      totalLiquidity
    }
  }
`;
