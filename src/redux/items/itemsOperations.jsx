import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfAPI from '../../services/Api-heroku';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.addContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.deleteContacts(id);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
