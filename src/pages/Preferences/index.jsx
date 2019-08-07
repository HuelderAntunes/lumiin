import React from "react";
import { Form } from "antd";
import Title from "../../components/Title";
import ProfileForm from "./ProfileForm";
import { FormContainer } from "./styles";

const Preferences = () => {

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (<div>
    <Title>PERFIL</Title>
    <FormContainer>
      <ProfileForm />
    </FormContainer>


  </div>)
}

export default Preferences;
