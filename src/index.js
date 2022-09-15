import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import { Tokens } from "./views/Tokens";
import { TokenContextProvider } from "./context/TokenContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <TokenContextProvider>
      <ThemeContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Tokens} />
          </Switch>
        </Router>
      </ThemeContextProvider>
    </TokenContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
