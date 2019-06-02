import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Poster from "./views/Poster";
import Diary from "./views/Diary";
import EditorPage from "./views/EditorPage";
import editor from "./components/editor";

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/poster" component={Poster} />
    <Route path="/diary" component={Diary} />
    <Route path="/editorpage" component={EditorPage} />
    <Route path="/editor" component={editor} />
  </Switch>
);

export default withRouter(App);