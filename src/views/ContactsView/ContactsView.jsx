import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import TitleHero from '../../components/TitleHero/TitleHero';
import ContactForm from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

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
