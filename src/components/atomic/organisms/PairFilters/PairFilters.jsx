import { Select } from 'components/atomic/atoms/Select/Select';
import React, { useContext } from 'react';
import {
  setFilterBy,
  setItemsOnPage,
} from '../../../../context/actionNames';
import { PairsContext } from '../../../../context/PairsContext';

import { filterByOptions, itemsOnPageOptions } from './config';

export function PairFilters() {
  const PairContext = useContext(PairsContext);
  const { dispatch: pairsDispatch } = PairContext;

  return (
    <div>
      <div className="filter-buttons">
        <Select
          dispatch={pairsDispatch}
          action={setFilterBy}
          placeHolder="Filter By"
          options={filterByOptions}
        />

        <Select
          dispatch={pairsDispatch}
          action={setItemsOnPage}
          placeHolder="Items per page"
          options={itemsOnPageOptions}
        />
      </div>
    </div>
  );
}
