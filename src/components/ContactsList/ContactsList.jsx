import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/slice';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const normalizeFilter = filter?.toLocaleLowerCase();

  console.log(filter);

  const filterContacts = contacts.filter(fil => {
    return fil.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  console.log(filterContacts);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div>
      {filterContacts.length === 0 || (
        <ul>
          {filterContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className="contact-unit">
                <p>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => deleteContact(id)}
                  className="delete-contact"
                >
                  Удалить контакт
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
