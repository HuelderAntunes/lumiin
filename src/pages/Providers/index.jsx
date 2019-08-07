import React from "react";
import Title from "../../components/Title";
import { Card, Col, Row } from "antd";
import { Container } from "./styles";
import MailForm from "./MailForm";
import ProviderList from "./ProviderList";

export const Home = props => {
  return (
    <React.Fragment>
      <Title>FORNECEDORES</Title>
      <Container>
      <MailForm />
      <hr/>
      <ProviderList/>

      </Container>

    </React.Fragment>
  );
};

export default Home;
