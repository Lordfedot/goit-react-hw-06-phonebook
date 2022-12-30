import { useDispatch } from 'react-redux';
import { removeContact } from 'components/redux/slices/contactSlice';
import { ButtonDelete } from './Styled/ContactsList.styled';
import { ContactItem } from './Styled/ContactsList.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(contact.id));
  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <ButtonDelete onClick={handleDelete} type="button">
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
