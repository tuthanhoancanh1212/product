import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, PageNotFound } from "../index";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Router;
