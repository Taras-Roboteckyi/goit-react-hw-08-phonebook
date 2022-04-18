import ContactListItem from '../ContactListItem/ContactListItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ListStyle } from './ContactList.styled';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ListStyle>
      {data.map(({ name, id, phone }) => {
        return (
          <ContactListItem
            key={id}
            data={{ phone, name, id }}
            onDeleteContact={() => {
              toast.error('Sorry you deleted the contact!', {
                position: toast.POSITION.TOP_CENTER,
              });
              return onDeleteContact(id);
            }}
          />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;
