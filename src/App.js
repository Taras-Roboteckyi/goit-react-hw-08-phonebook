import { Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './App.global.styled';

import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';

import ContactsView from './views/ContactsView/ContactsView';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <GlobalStyles>
      {/* <UserMenu /> */}
      <>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/contacts"> Contacts</NavLink>
        <NavLink to="/register"> Register</NavLink>
        <NavLink to="/login"> Login</NavLink>
      </>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </GlobalStyles>
  );
}
