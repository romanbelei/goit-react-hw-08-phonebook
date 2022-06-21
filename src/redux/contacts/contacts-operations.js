import axios from 'axios';
import {
  addContactRequest,
  addContactsuccess,
  addContactError,
  deleteContactRequest,
  deleteContactsuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

// GET @ /tasks
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addContact = description => dispatch => {
  const contact = description;
  // completed: false,
  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

// DELETE @ /tasks/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /tasks/:id
// const toggleCompleted =
//   ({ id, completed }) =>
//   dispatch => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());

//     axios
//       .patch(`/tasks/${id}`, update)
//       .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//       .catch(error => dispatch(toggleCompletedError(error.message)));
//   };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
