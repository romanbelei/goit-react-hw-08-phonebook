import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactsuccess,
  addContactError,
  deleteContactRequest,
  deleteContactsuccess,
  deleteContactError,
  changeFilter,
  // toggleCompletedRequest,
  // toggleCompletedSuccess,
  // toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  // [toggleCompletedSuccess]: (state, { payload }) =>
  //   state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactsuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactsuccess]: () => false,
  [deleteContactError]: () => false,
  // [toggleCompletedRequest]: () => true,
  // [toggleCompletedSuccess]: () => false,
  // [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
