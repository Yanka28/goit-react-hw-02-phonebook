import { List, Contact, ListItem, Button } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <ListItem>
            {contact.name}:{contact.number}
          </ListItem>
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </Contact>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
