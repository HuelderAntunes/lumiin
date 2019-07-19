import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import GlobalStyle from "./styles/global";
const BaseRouter = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default BaseRouter;
