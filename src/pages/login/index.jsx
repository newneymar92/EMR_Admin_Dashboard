import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoVroad from '@assets/images/logovr.svg';
import PATH_URL from '@common/config/pathURL';

function Login() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log('submit');
  };
  const token = true;

  useEffect(() => {
    if (token) navigate(PATH_URL.HOME);
  }, [token, navigate]);

  return (
    <div className="login flex-center flex-column">
      <div>
        <img src={logoVroad} alt="logo" className="login-logo mb-25" />
      </div>
      <Form
        name="form-login"
        className="login-form"
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'hhhh',
            },
          ]}
        >
          <Input placeholder="ttttt" className="login-form-input" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Input.Password placeholder="eeee" className="login-form-input" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            llllll
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
