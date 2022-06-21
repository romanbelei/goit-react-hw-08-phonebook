import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import { RiUserAddFill } from 'react-icons/ri';
import ModalWindow from '../Modal/Modal';

import ContactForm from '../ContactForm/ContactForm.jsx';
// import Modal from 'components/Modal/Modal';
import styles from 'components/Filter/Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const [toggle, setToggle] = useState(false);
  const handleToggleOnClick = () => setToggle(!toggle);

  return (
    <div className={styles.filter}>
      <button
        className={styles.buttonAddContacts}
        onClick={handleToggleOnClick}
      >
        <RiUserAddFill />
      </button>
      <div className={styles.filter}>
        {/* <p className={styles.label}>Фильтр по содержимому</p> */}
        <input
          type="text"
          className={styles.input}
          value={value}
          placeholder="Search"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
      {/* {toggle && <ContactsForm onClose={handleToggleOnClick} />} */}
      {toggle && (
        <ModalWindow buttonClose="true">
          <ContactForm />
        </ModalWindow>
      )}
    </div>
  );
}

export default Filter;
