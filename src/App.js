import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './App.global.styled';

import { authOperations } from './redux/auth';

import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
//import HomeView from './views/HomeView/HomeView';
//import RegisterView from './views/RegisterView/RegisterView';
//import LoginView from './views/LoginView/LoginView';
//import ContactsView from './views/ContactsView/ContactsView';
//import { NavLink } from 'react-router-dom';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView').then(module => ({
    default: module.HomeView,
  })),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView/RegisterView').then(module => ({
    default: module.RegisterView,
  })),
);

const LoginView = lazy(() =>
  import('./views/LoginView/LoginView').then(module => ({
    default: module.LoginView,
  })),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView/ContactsView').then(module => ({
    default: module.ContactsView,
  })),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <GlobalStyles>
      <AppBar />
      <>
        {/* <NavLink to="/"> Home</NavLink>
        <NavLink to="/contacts"> Contacts</NavLink>
        <NavLink to="/register"> Register</NavLink>
        <NavLink to="/login"> Login</NavLink> */}
      </>
      <Suspense fallback={<p>Загружаєм...</p>}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute navigateTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </GlobalStyles>
  );
}
