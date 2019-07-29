import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";
import { LoadingContainer } from "../../styles/app";
import colors from "../../styles/colors"
import Loader from 'react-loader-spinner';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if(!loading)
        if (!isAuthenticated) {
          await loginWithRedirect({
            appState: { targetUrl: path }
          });
        }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  if(loading) return (<LoadingContainer><Loader type="Triangle"color={colors.primary} height="100"	 width="100"/></LoadingContainer>)

  const render = props => isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
