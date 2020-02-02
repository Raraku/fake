import React from "react";
import { Route, Switch } from "react-router-dom";
import Viewer from "./containers/Viewer";
import Login from "./containers/logintest";
import TestContainer from "./containers/rest-tester-container";
import Web from "./Display/Web/Web";
import Mobile from "./Display/Mobile/Mobile";

const BaseRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Web} />
      <Route path="/mobile/" component={Mobile} />
      <Route path="/login/" component={Login} />
      <Route path="/main/" component={Viewer} />
    </Switch>
  );
};

export default BaseRouter;
