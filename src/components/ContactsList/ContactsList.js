import { List, Contact, ListItem, Button } from './ContactsList.styled';

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


