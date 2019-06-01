import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./views/Home";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default withRouter(App);