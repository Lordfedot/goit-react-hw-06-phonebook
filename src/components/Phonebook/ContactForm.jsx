import { useState } from 'react';
import { Form, Input, Button } from './Styled/ContactForm.styled';


const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return console.error('Error');
    }
  };
  const submitForm = e => {
    e.preventDefault();

    onSubmit({ name, phone });

    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={submitForm}>
      <label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <Input
          type="tel"
          onChange={handleChange}
          value={phone}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
