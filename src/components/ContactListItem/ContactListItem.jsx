import PropTypes from 'prop-types';
import { ImUser } from 'react-icons/im';

import { ListItemStyle, NameContactStyle, ButtonContactStyle } from './ContactListItem.styled';

const ContactListItem = ({ data, onDeleteContact }) => {
  const { number, name } = data;

  /* console.log(data); */
  return (
    <ListItemStyle>
      <ImUser size={12} />
      <NameContactStyle>{name}:</NameContactStyle>
      <NameContactStyle>{number}</NameContactStyle>
      <ButtonContactStyle type="button" onClick={onDeleteContact}>
        Delete
      </ButtonContactStyle>
    </ListItemStyle>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
