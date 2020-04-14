import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import RouterListener from "./RouteListener";
import SessionStorageView from "./SessionStorageView";
import RoutePathForwarder from "./RoutePathForwarder";
import { RoutingContextProvider } from "./RoutingContext";

export default function App() {
  return (
    <BrowserRouter>
      <RoutingContextProvider>
        <RouterListener />
        <div className="App">
          <h1>Router Exploration 👨‍🔬</h1>
          <div className="Nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/search?caseId=100">Search with search params</Link>
              </li>
              <li>
                <Link to="/search/xxx-uuid-xxx/test?testId=100">
                  Search with url param and search params
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route path="/" exact>
                <RoutePathForwarder />
                Home page
              </Route>
              <Route path="/about" exact>
                <RoutePathForwarder />
                About page
              </Route>
              <Route path="/search" exact>
                <RoutePathForwarder />
                Route with search
              </Route>
              <Route path="/search/:customerId/test" exact>
                <RoutePathForwarder />
                Route and url params
              </Route>
            </Switch>
          </div>
          <hr />
          <div className="Info">
            <SessionStorageView />
          </div>
        </div>
      </RoutingContextProvider>
    </BrowserRouter>
  );
}
