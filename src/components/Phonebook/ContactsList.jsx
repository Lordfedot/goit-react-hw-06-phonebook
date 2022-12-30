import { useSelector } from 'react-redux';
import { List } from './Styled/ContactsList.styled';
import { getContacts, getFilter } from 'components/redux/selectors';
import { Contact } from './ContactItem';
const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id}></Contact>
      ))}
    </List>
  );
};

export default ContactsList;
