import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ToastContainer } from 'react-toastify';
import { Form, Input, Button } from 'antd';

import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css';

import { Container, Title } from './RegisterView.styled';

export function RegisterView() {
  const dispatch = useDispatch();

  const onFinish = values => {
    //console.log('Success:', values);
    dispatch(authOperations.register(values));
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };
  return (
    <Container>
      <Title>Register to enter the application!</Title>

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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ToastContainer />
    </Container>
  );
}
