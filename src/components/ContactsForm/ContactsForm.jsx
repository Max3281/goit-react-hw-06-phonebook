import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, addNumber, resetName, resetNumber } from 'redux/slice';

function ContactsForm({ onSubmit }) {
  const nameSelector = useSelector(store => store.name);
  const numberSelector = useSelector(store => store.number);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        dispatch(addName(e.currentTarget.value));
        break;
      case 'number':
        dispatch(addNumber(e.currentTarget.value));
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    dispatch(resetName());
    dispatch(resetNumber());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(nameSelector, numberSelector);
    resetForm();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={nameSelector}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Tel.Number</label>
      <input
        type="tel"
        name="number"
        placeholder="Tel. number"
        value={numberSelector}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactsForm;
