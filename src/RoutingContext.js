/**
 * Routing Context Provider
 * Idea:
 *  - Use a RouteListener component to listen to any route changes and
 *    to persist the the search params in local storage
 *  - Problem we can only read params below the actual <Route> in the
 *    component Hierarchy, BUT: we can use `matchPath` which is the function to
 *    parse the params internally.
 *  - Context API to bubble up the url definition string. (PathForwarder - component)
 *
 * Use a Listener C
 *
 *
 */

import React from "react";

const context = React.createContext();

export function RoutingContextProvider({ children }) {
  const [currentPath, setCurrentPath] = React.useState("/");

  return (
    <context.Provider
      value={{
        currentPath,
        setCurrentPath
      }}
    >
      {children}
    </context.Provider>
  );
}

export function useRoutingContext() {
  const ctx = React.useContext(context);
  if (!ctx) {
    throw new Error("Could not find <RoutingContextProvider>. Please provide.");
  }
  return ctx;
}
