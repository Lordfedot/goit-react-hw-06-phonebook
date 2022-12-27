import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactsList from './Phonebook/ContactsList';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import Box from './Box';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const addContact = ({ name, phone }) => {
    const contact = {
      id: nanoid(),
      name,
      number: phone,
    };
    if (checkExistingContact(contact) === false) {
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const checkExistingContact = newContact => {
    if (contacts.map(contact => contact.name).includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <>
      <Box pl="40px" mr="auto">
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={addContact} />
        <div>
          <h2>Contacts</h2>
          <Filter onChangeFilter={changeFilter} filter={filter} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDelete={deleteContacts}
          />
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
