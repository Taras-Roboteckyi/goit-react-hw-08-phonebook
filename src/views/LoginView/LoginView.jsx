import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
/* import 'antd/dist/antd.css'; */
import 'antd/dist/antd.min.css';

import { authOperations } from '../../redux/auth';

import { Container, Title } from './LoginView.styled';

export function LoginView() {
  const dispatch = useDispatch();

  const onFinish = values => {
    //console.log('Success:', values);
    dispatch(authOperations.login(values));
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Title>Log in to enter the application!</Title>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          type="email"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
