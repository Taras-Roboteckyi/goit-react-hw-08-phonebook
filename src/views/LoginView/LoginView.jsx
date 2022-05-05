//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
/* import 'antd/dist/antd.css'; */
import 'antd/dist/antd.min.css';
//import styled from 'styled-components';

import { authOperations } from '../../redux/auth';

import { Container } from './LoginView.styled';

/* const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
}; */
/* const FormPhoneBook = styled(Form)`
 
  padding: 20px;
  display: flex;
  height: 195px;
  flex-direction: column;
  align-items: flex-start;
  
`; */

export function LoginView() {
  const dispatch = useDispatch();
  /*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }; */

  /*  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  }; */
  const onFinish = values => {
    //console.log('Success:', values);
    dispatch(authOperations.login(values));
    /* setEmail('');
    setPassword(''); */
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <h1>Log in to enter the application!</h1>

      {/*    <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Log in</button>
      </form> */}
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
        autoComplete="on"
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
