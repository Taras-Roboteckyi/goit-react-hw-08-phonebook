import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, navigateTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldNavigate = isLoggedIn && restricted;
  //console.log(shouldNavigate);
  return shouldNavigate ? <Navigate to={navigateTo} /> : children;
}
