import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "../App";
import GlobalStyle from "../styles/global";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login";

const BaseRouter = props => {
  return (
      <Router>
        <Switch>
          <PrivateRoute path="/app" component={ App } />
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ Login } />
        </Switch>
        <GlobalStyle />
      </Router>
  );
};

export default BaseRouter;
