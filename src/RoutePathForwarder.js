import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useRoutingContext } from "./RoutingContext";

function RoutePathForwarder() {
  const match = useRouteMatch();
  const { setCurrentPath } = useRoutingContext();

  console.log("forwarderMatch:", match);
  if (match) {
    setCurrentPath(match.path);
  }

  return null;
}

export default RoutePathForwarder;
