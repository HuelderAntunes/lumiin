import React from "react";
import { Container } from "./styles";
import { Button } from "antd";
import { Redirect } from "react-router-dom"
import Logo from "../../images/brand/logo.png";
import { useAuth0 } from "../../react-auth0-wrapper";
import { LoadingContainer } from "../../styles/app";
import colors from "../../styles/colors"
import Loader from 'react-loader-spinner';

const Login = props => {
  const { loginWithRedirect, isAuthenticated, loading } = useAuth0();

  if(loading) return (<LoadingContainer><Loader type="Triangle"color={colors.primary} height="100"	 width="100"/></LoadingContainer>)

  if(isAuthenticated) return <Redirect to="/app"/>
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />
        <h3>Please login to access system.</h3>
        <Button onClick={() => loginWithRedirect({})}> Go To Login</Button>
      </div>
    </Container>
  );
};

export default Login;
