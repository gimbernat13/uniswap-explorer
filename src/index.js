import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TokensContextProvider } from "./context/TokensContext";

import { ThemeContextProvider } from "./context/ThemeContext";
import "./App.css";
// import { Layout } from "components/Layout/Layout";
import { PairsContextProvider } from "./context/PairsContext";
import { PairAggregate } from "./views/PairAggregate/PairAggregate";
import { TokensView } from "./views/Tokens/Tokens";
import { TokenAggregate } from "./views/TokenAggregate/TokenAggregate";
import { Pairs } from "./views/Pairs/Pairs";
import { Layout } from "components/global/Layout/Layout";
import reportWebVitals from "./reportWebVitals";
const client = new ApolloClient({
  uri: "https://gateway.thegraph.com/api/1bc3d7826e217d5a90a4a1d5ca8d1f84/subgraphs/id/2szAn45skWZFLPUbxFEtjiEzT1FMW8Ff5ReUPbZbQxtt",
  cache: new InMemoryCache(),
});


const  THEGRAPH_API_KEY  = process.env.REACT_APP_THEGRAPH_API_KEY
console.log("the graph key" , process.env.REACT_APP_THEGRAPH_API_KEY); // 

const routes = [
  {
    path: "/pairs",
    component: Pairs,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <TokensContextProvider>
          <PairsContextProvider>
            <Router>
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/tokens" />
                  </Route>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Layout>
            </Router>
          </PairsContextProvider>
        </TokensContextProvider>
      </ThemeContextProvider>
    </ApolloProvider>
    
  </React.StrictMode>
);

reportWebVitals();
