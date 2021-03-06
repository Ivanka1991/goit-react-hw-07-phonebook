// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');

// const deleteContact = createAction('phonebook/deleteContact');
// const actions = { addContact, deleteContact, changeFilter };

// export default actions;

// const addContact = ({name, number}) => ({
//   type:'phonebook/addContact',
//   payload: {
//     id: uuidv4(),
//     name,
//     number
//   }
// })

// const deleteContact = ( contact ) => ({
//   type:'phonebook/deleteContact',
//   payload: contact,
// })

// const changeFilter = value => ({
//   type:'phonebook/changeFilter',
//   payload: value,
// })

// export default {addContact, deleteContact, changeFilter}
// const addContact = createAction('phonebook/addContact', (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));
