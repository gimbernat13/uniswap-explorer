import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tokens } from "./views/Tokens";
import { TokensContextProvider } from "./context/TokensContext";
import { TokenContextProvider } from "./context/TokenContext";

import { ThemeContextProvider } from "./context/ThemeContext";
import "./App.css";
import { PairList } from "./components/PairList/PairList";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./views/Home/Home";
import { Pairs } from "./views/Pairs/Pairs";
import { PairsContextProvider } from "./context/PairsContext";
import { PairAggregate } from "./views/PairAggregate/PairAggregate";
import { TokensView } from "./views/Tokens";
import { TokenAggregate } from "./views/TokenAggregate/TokenAggregate";
import { TokenCardList } from "./components/TokenCardList/TokenCardList";
import { FilterButtons } from "./components/FilterButtons/FilterButtons";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  cache: new InMemoryCache(),
});

const routes = [
  {
    path: "/pairs",
    component: PairRoutes,
    routes: [
      {
        path: "/pairs/:pairID",
        component: PairAggregate,
      },
    ],
  },
  {
    path: "/tokens",
    component: TokensView,
    routes: [
      {
        path: "/tokens/:tokenID",
        component: TokenAggregate,
      },
    ],
  },
];

function PairRoutes({ routes }) {
  return (
    <div>
      <h2>Pairs</h2>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <PairList />
    </div>
  );
}

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

render(
  <ApolloProvider client={client}>
    <TokensContextProvider>
      <PairsContextProvider>
        <TokenContextProvider>
          <ThemeContextProvider>
            <Router>
              <Layout>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Layout>
            </Router>
          </ThemeContextProvider>
        </TokenContextProvider>
      </PairsContextProvider>
    </TokensContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
