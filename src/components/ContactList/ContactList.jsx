import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import {} from '../../redux/contacts';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(contactsOperations.fetchContacts());
  }, [dispath]);

  return (
    <ul className={styles.contactList}>
      {contacts
        .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return (
            <li className={styles.itemList} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={styles.buttonDelete}
                key={contact.id}
                name={contact.name}
                type="button"
                onClick={() =>
                  dispath(contactsOperations.deleteContact(contact.id))
                }
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
