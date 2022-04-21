import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContacts } from '../../redux/items';

import { FormPhoneBook, LabelPhoneBook, InputPhoneBook, ButtonPhoneBook } from './Form.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = event => {
    event.preventDefault();

    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        console.log(`Field type name - ${name} is not processed`);
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    dispatch(addContacts({ name, phone }));

    reset();
    toast.success('Congratulations, you have created a new contact!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormPhoneBook onSubmit={handleSubmit}>
      <LabelPhoneBook htmlFor={nameInputId}>
        Name
        <InputPhoneBook
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          id={nameInputId}
          value={name}
          onChange={handleNameChange}
        />
      </LabelPhoneBook>
      <LabelPhoneBook htmlFor={numberInputId}>
        Number
        <InputPhoneBook
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          id={numberInputId}
          value={phone}
          onChange={handleNameChange}
        />
      </LabelPhoneBook>
      <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
    </FormPhoneBook>
  );
}
