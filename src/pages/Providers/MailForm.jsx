import React from "react";
import { Form,  Input, Button, Col, Row } from "antd";
import { useAuth0 } from "../../react-auth0-wrapper";

const MailForm = (props) => {

  const { getFieldDecorator } = props.form;

  return (<div>
    <Row>
      <Col span={12}>
        <Form>
          <Form.Item label="Convidar por e-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not a valid e-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input a valid e-mail!',
                  },
                ],
              })(<Input />)}

          </Form.Item>
          <Button type="primary" htmlType="submit">
              Enviar
            </Button> <Button type="link">Ver pendentes</Button>
        </Form>
      </Col>
    </Row>
  </div>)
}

export default Form.create({ name: 'profile_form' })(MailForm);;
