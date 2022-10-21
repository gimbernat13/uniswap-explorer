import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import { TokensContextProvider } from "./context/TokensContext";
import { TokenContextProvider } from "./context/TokenContext";
import { PairsContextProvider } from "./context/PairsContext";
import { PairAggregate } from "./views/PairAggregate/PairAggregate";
import { Tokens } from "./views/Tokens/Tokens";
import { TokenAggregate } from "./views/TokenAggregate/TokenAggregate";
import { Pairs } from "./views/Pairs/Pairs";
import { Layout } from "components/global/Layout/Layout";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./App.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  cache: new InMemoryCache(),
});

export const App = () => {
  let routes = useRoutes([
    {
      path: "pairs",
      element: <Pairs />,
      children: [{ path: ":pairID", element: <PairAggregate /> }],
    },
    {
      path: "tokens",
      element: <Tokens />,
      children: [{ path: ":tokenID", element: <TokenAggregate /> }],
    },
  ]);
  return (
    <ApolloProvider client={client}>
      <TokensContextProvider>
        <PairsContextProvider>
          <TokenContextProvider>
            <ThemeContextProvider>
              <Layout>
                <Routes>
                  {routes.map((route, i) => (
                    <Route key={i} {...route} />
                  ))}
                </Routes>
              </Layout>
            </ThemeContextProvider>
          </TokenContextProvider>
        </PairsContextProvider>
      </TokensContextProvider>
    </ApolloProvider>
  );
};
