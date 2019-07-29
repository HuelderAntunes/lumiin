import React from "react";
import { Form,  Input, Button, Upload, Icon, message, Row, Col } from "antd";
import { useAuth0 } from "../../react-auth0-wrapper";

const ProfileForm = (props) => {

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const { user  } = useAuth0();

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} arquivo enviado com sucesso.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} falhou.`);
      }
    }
  }

  return (<div>
    <Form>
    <Row>
      <Col span={20}>
        <Form.Item label="Nickname">
              {getFieldDecorator('email', {
                initialValue: user.nickname,
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: false }],
              })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                initialValue: user.email,
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
              <span style={{marginLeft: "10px",}}>{user.email_verified ? "Email Verified." : "Email Not Verified."}</span>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
        </Form.Item>
      </Col>
      <Col span={4} >
          <Form.Item label="Avatar" style={{ float: "right" }}>
            <img src={user.picture} alt="Avatar" style={{ display: "block", width: "150px" }} />
            {getFieldDecorator('avatar', {
                initialValue: user.nickname,
              })(<Upload {...uploadProps} >
                <Button>
                  <Icon type="upload" /> Abrir arquivo
                </Button>
              </Upload>,)}

          </Form.Item>
      </Col>
    </Row>
    </Form>

    <hr/>

    <Button type="primary" style={{ margin: "20px 0", display: "block" }}>
      Resetar senha
    </Button>




  </div>)
}

export default Form.create({ name: 'profile_form' })(ProfileForm);;
