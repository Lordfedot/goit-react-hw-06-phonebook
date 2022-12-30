import PropTypes from 'prop-types';
import ContactsList from './Phonebook/ContactsList';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import Box from './Box';


export const App = () => {
  return (
    <>
      <Box pl="40px" mr="auto">
        <h1>Phonebook</h1>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </Box>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};
Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
