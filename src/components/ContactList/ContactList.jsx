import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ItemsSelectors, fetchContacts, deleteContacts } from '../../redux/items';
import ContactListItem from '../ContactListItem/ContactListItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ListStyle } from './ContactList.styled';

const ContactList = () => {
  const data = useSelector(ItemsSelectors.getVisibleItems);
  const dispatch = useDispatch();
  const onDeleteItems = id => dispatch(deleteContacts(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
              return onDeleteItems(id);
            }}
          />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;
