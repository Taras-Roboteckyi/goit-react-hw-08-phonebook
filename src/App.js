/* import { useState } from 'react'; */
/* import { Routes, Route } from 'react-router-dom'; */
import { ToastContainer } from 'react-toastify';
/* import { HomeView } from './pages/HomeView/HomeView';
import { RegisterView } from './pages/RegisterView/RegisterView';
import { LoginView } from './pages/LoginView/LoginView';
import { ContactsView } from './pages/ContactsView/ContactsView';

import { UserMenu } from './components/UserMenu/UserMenu'; */
import 'react-toastify/dist/ReactToastify.css';

import TitleHero from './components/TitleHero/TitleHero';
import ContactForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

/* import { Api } from './redux/items'; */

import { GlobalStyles } from './App.global.styled';
import {
  TitlePhoneBook,
  TitleContacts,
  Section,
  SectionContact,
  ContainerList,
} from './App.styled';

export default function App() {
  /*  const [filter, setFilter] = useState('');

  ///////Хук для виведення данних після запиту на бекенд/////
  const { data, error, isLoading } = Api.useFetchContactsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  ///////Хук для видалення данних з бекенду/////
  const [onDeleteItems] = Api.useDeleteContactsMutation();

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return data
      ?.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((firstName, secondName) => {
        
        return firstName.name.localeCompare(secondName.name);
      });
  }; */

  return (
    <GlobalStyles>
      {/* <UserMenu />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes> */}
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
    </GlobalStyles>
  );
}
