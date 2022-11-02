/* eslint-disable import/no-cycle */
import { useQuery } from '@apollo/client';
import React from 'react';
import { Switch, useHistory } from 'react-router-dom';

import { Loader } from 'components/atomic/atoms/Loader/Loader';
import { TokenCardList } from 'components/atomic/organisms/TokenCardList/TokenCardList';
import { TokenTable } from 'components/atomic/organisms/TokenTable/TokenTable';

import { useViewType } from 'hooks/useViewType';
import { ViewTypeButtons } from 'components/atomic/molecules/ViewTypeButtons/ViewTypeButtons';
import { Card } from 'components/atomic/atoms/Card/Card';
import { hasSubRoute } from 'utils/hasSubRoute';
import { RouteWithSubRoutes } from 'index';
import * as Styled from './styles';
import { TOKENS } from './queries';

export function TokensView({ routes }) {
  const { viewType, viewTypes, handleViewTypeChange } = useViewType();
  const { loading, error, data } = useQuery(TOKENS);

  const { location } = useHistory();
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h3>Tokens</h3>
      {!hasSubRoute('/tokens', location) && (
        <Card fitContent>Select a Token to view Stats</Card>
      )}
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
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

      {viewType.id === 'table' && <TokenTable tableData={data.tokens} />}
      {viewType.id === 'cards' && <TokenCardList data={data} />}
    </div>
  );
}
