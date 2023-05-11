import React from 'react';
import { nanoid } from 'nanoid';
import { addContacts, deleteContacts, onFilter } from '../../redux/slice';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const contactsSelector = useSelector(store => store.contacts.value);
  const filterSelector = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const changeFilter = e => {
    dispatch(onFilter(e.currentTarget.value));
  };

  const formSubmit = (name, number) => {
    const checkAlert = contactsSelector.some(
      f => f.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (checkAlert) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(9),
      name: name,
      number: number,
    };

    dispatch(addContacts(newContact));
  };

  const normalizeFilter = filterSelector.toLocaleLowerCase();
  const filterContacts = contactsSelector?.filter(fil => {
    return fil.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={formSubmit} />

      <h2>Contacts</h2>
      <Filter val={filterSelector} onChange={changeFilter} />
      <ContactsList data={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
