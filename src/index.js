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
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <TokensContextProvider>
      <TokenContextProvider>
        <ThemeContextProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Tokens} />
            </Switch>
          </Router>
        </ThemeContextProvider>
      </TokenContextProvider>
    </TokensContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
