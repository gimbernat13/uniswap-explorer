import React from 'react'
import { PairFilters } from '../../components/PairFilters/PairFilters'
import { PairList } from '../../components/PairList/PairList'

export const Pairs = () => {
  return (
    <div>
        <PairFilters />
        <PairList />
    </div>
  )
}
