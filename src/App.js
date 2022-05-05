import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyles, DownloadText } from './App.global.styled';

import { authOperations, authSelectors } from './redux/auth';

import { Layout } from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

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
  const isRefetchingPage = useSelector(authSelectors.getRefetchingPage);
  //console.log(isRefetchingPage);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefetchingPage && ( //Щоб не мигав інтерфейс при переході на перезагрузку
      <GlobalStyles>
        <Suspense fallback={<DownloadText>Download...</DownloadText>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeView />} />

              <Route
                path="/register"
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
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
            </Route>
          </Routes>
        </Suspense>
      </GlobalStyles>
    )
  );
}
