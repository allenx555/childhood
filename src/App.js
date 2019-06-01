import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Poster from "./views/Poster";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/poster" component={Poster} />
  </Switch>
);

export default withRouter(App);