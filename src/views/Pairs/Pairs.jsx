/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { useQuery } from '@apollo/client';
import React from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { Loader } from 'components/atomic/atoms/Loader/Loader';
import { PairList } from 'components/atomic/organisms/PairList/PairList';
import { PairTable } from 'components/atomic/organisms/PairTable/PairTable';
import { useViewType } from 'hooks/useViewType';
import { ViewTypeButtons } from 'components/atomic/molecules/ViewTypeButtons/ViewTypeButtons';
import { hasSubRoute } from 'utils/hasSubRoute';
import { Card } from 'components/atomic/atoms/Card/Card';
import { RouteWithSubRoutes } from 'index';
import {
  UilCoins,
  UilWaterGlass,
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons';
import GradientTitle from 'components/atomic/atoms/GradientTitle/GradientTitle';
import * as Styled from './styles';
import { PAIRS } from './queries';

export function Pairs({ routes }) {
  React.useEffect(() => {}, []);
  const { location } = useHistory();
  const { viewType, viewTypes, handleViewTypeChange } = useViewType();
  const { loading, error, data } = useQuery(PAIRS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h3>Pairs</h3>
      {!hasSubRoute('/pairs', location) && (
        <Card fitcontent>Select a Pair to view Stats</Card>
      )}
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
      <Styled.FlexSpaced>
        <h3>Most Traded</h3>
        <div>
          <ViewTypeButtons
            viewType={viewType}
            viewTypes={viewTypes}
            handleViewTypeChange={handleViewTypeChange}
          />
        </div>
      </Styled.FlexSpaced>
      {viewType.id === 'table' && <PairTable tableData={data.pairs} />}
      {viewType.id === 'cards' && <PairList data={data} />}
    </div>
  );
}
