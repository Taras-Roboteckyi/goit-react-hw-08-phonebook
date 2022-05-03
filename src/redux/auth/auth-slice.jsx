import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefetchingPage: false,
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
    [fetchCurrentUser.pending](state) {
      state.isRefetchingPage = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.isLoggedIn = true;
      state.isRefetchingPage = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefetchingPage = false;
    },
  },
});

export default authSlice.reducer;
