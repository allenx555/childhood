import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default withRouter(App);