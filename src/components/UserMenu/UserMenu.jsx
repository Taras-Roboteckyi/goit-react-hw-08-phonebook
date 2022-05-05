import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

//import defaultAvatar from './default-avatar.png';
import { Container, NameUser, ButtonExit } from './UserMenu.styled';

/* const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  nameUser: {
    fontWeight: 700,
    marginRight: 12,
  },
}; */

export default function UserMenu() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  //console.log(nameUser);
  //const avatar = defaultAvatar;

  return (
    <Container /* style={styles.container} */>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <NameUser /* style={styles.name} */>Welcome, {nameUser}</NameUser>
      <ButtonExit type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </ButtonExit>
    </Container>
  );
}
