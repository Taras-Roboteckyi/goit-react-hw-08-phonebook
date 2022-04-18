import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Api } from '../../redux/items';

import { FormPhoneBook, LabelPhoneBook, InputPhoneBook, ButtonPhoneBook } from './Form.styled';

export default function ContactForm() {
  const [createContact] = Api.useCreateContactsMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.name.value;
    const phone = evt.currentTarget.elements.number.value;
    evt.currentTarget.reset();

    //console.log(name, phone);

    try {
      await createContact({ name, phone });
      toast.success('Congratulations, you have created a new contact!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
    }
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
        />
      </LabelPhoneBook>
      <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
    </FormPhoneBook>
  );
}
