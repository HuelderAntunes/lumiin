import React from "react";
import { Container } from "./styles";
import { Input, Tooltip, Icon, Button } from "antd";
import Logo from "../../images/brand/logo.png";
const Login = props => {
  return (
    <Container>
      <div>
        <img src={Logo} />
        <Input
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="You received your username and password by email.">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password placeholder="Enter your password" />
        <Button type="primary">Login</Button>
      </div>
    </Container>
  );
};

export default Login;
