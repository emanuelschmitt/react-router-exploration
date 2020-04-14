import { withRouter, matchPath } from "react-router-dom";

import { useRoutingContext } from "./RoutingContext";
import qs from "qs";

function clearSessionStorage() {
  console.log("clearing sessionStorage...");
  sessionStorage.clear();
}

function writeToSessionStorage(object) {
  console.log("writing to sessionStorage...", object);
  for (const [key, value] of Object.entries(object)) {
    sessionStorage.setItem(key, value);
  }
  console.log(sessionStorage);
}

function RouteListener(props) {
  const context = useRoutingContext();

  const queryParams = qs.parse(props.location.search, {
    ignoreQueryPrefix: true
  });

  console.log("RouterListener - context.currentPath", context.currentPath);
  console.log("props location pathname", props.location.pathname);

  const match = matchPath(props.location.pathname, context.currentPath);
  const urlParams = (match || {}).params || {};

  console.log("match", match);
  console.log("match params", urlParams);

  clearSessionStorage();
  writeToSessionStorage({ ...queryParams, ...urlParams });

  return null;
}

export default withRouter(RouteListener);
