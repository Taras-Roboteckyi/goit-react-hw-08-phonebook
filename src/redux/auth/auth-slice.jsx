import { createSlice } from '@reduxjs/toolkit';
//import { fetchContacts, addContacts, deleteContacts } from './itemsOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
