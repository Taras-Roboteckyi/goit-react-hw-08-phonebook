import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';
import 'antd/dist/antd.min.css';

import { authSelectors, authOperations } from '../../redux/auth';

import { Container, NameUser, ButtonExit } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  //console.log(nameUser);

  return (
    <Container>
      <Avatar style={{ color: 'gold', backgroundColor: 'royalblue', marginRight: 8 }} size="16">
        {nameUser.slice(0, 1)}
      </Avatar>
      <NameUser>Welcome, {nameUser}</NameUser>
      <ButtonExit type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </ButtonExit>
    </Container>
  );
}
