/* import { useState } from 'react'; */
/* import { Routes, Route } from 'react-router-dom'; */
import { ToastContainer } from 'react-toastify';
/* import { HomeView } from './pages/HomeView/HomeView';
import { RegisterView } from './pages/RegisterView/RegisterView';
import { LoginView } from './pages/LoginView/LoginView';
import { ContactsView } from './pages/ContactsView/ContactsView';

import { UserMenu } from './components/UserMenu/UserMenu'; */
import 'react-toastify/dist/ReactToastify.css';

import TitleHero from '../../components/TitleHero/TitleHero';
import ContactForm from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

/* import { GlobalStyles } from './App.global.styled'; */
import {
  TitlePhoneBook,
  TitleContacts,
  Section,
  SectionContact,
  ContainerList,
} from './ContactsView.styled';

export function ContactsView() {
  return (
    <>
      <TitleHero />
      <>
        <Section>
          <TitlePhoneBook>Phonebook</TitlePhoneBook>
          <ContactForm></ContactForm>
        </Section>
      </>

      <SectionContact>
        <div>
          <TitleContacts>Contacts</TitleContacts>

          <Filter></Filter>
        </div>

        <ContainerList>
          <ContactList></ContactList>
        </ContainerList>
      </SectionContact>
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
    </>
  );
}
