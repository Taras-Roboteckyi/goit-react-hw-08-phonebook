import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfAPI from '../../services/Api-heroku';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.registerUser(credentials);
      return data;
    } catch (error) {
      if (error) {
        toast.error('Not the correct password or email', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const data = await contactShelfAPI.loginUser(credentials);
    return data;
  } catch (error) {
    if (error) {
      toast.error('Not the correct email or password ', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await contactShelfAPI.logOutUser();
  } catch (error) {
    console.log('Cho take&');
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  /* console.log(thunkAPI.getState()); */
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  /* token.set(persistedToken); */
  try {
    const data = await contactShelfAPI.currentUser(persistedToken);
    return data;
  } catch (error) {}
});
