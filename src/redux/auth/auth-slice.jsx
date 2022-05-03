import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload?.data.user;
      state.token = payload?.data.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload?.data.user;
      state.token = payload?.data.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
