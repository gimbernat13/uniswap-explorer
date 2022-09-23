import React from 'react'
import { PairFilters } from '../../components/PairFilters/PairFilters'
import { PoolList } from '../../components/PoolList/PoolList'

export const Pairs = () => {
  return (
    <div>
        <PairFilters />
        <PoolList />
    </div>
  )
}
