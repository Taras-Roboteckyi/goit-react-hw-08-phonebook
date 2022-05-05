import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Form, Label, Input } from './RegisterView.styled';

export function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Страница регистрации</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Email
          <Input type="email" name="email" value={email} onChange={handleChange} />
        </Label>

        <Label>
          Password
          <Input type="password" name="password" value={password} onChange={handleChange} />
        </Label>

        <button type="submit">Sign up</button>
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
