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

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <TokensContextProvider>
      <PairsContextProvider>
        <TokenContextProvider>
          <ThemeContextProvider>
            <Router>
              <Layout>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/tokens" exact component={Tokens} />
                  <Route path="/pairs/:pairID" exact component={PairAggregate} />
                  <Route path="/pairs" exact component={Pairs} />
                  <Route path="/liquidity" exact component={PairList} />
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
