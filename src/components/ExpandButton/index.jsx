import React from "react";
import { Container } from "./styles";

const ExpandedButton = props => {
  return (
    <Container>
      <span>{props.text}</span>
      <img src={props.image} alt="User"/>
    </Container>
  );
};

export default ExpandedButton;
