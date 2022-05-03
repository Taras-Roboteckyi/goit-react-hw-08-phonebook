import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  /* FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, */
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { ItemsSlice } from './items';
import { authReducer } from './auth';

/* const contactsPersistConfig = {
  key: 'contactsKey',
  storage,
  blacklist: ['filter'], //Забирає властивість filter з localstorage, також існує whitelist-який включає властивість в localstorage
}; */

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Зберігає тільки цю властивість в localstorage
};

////////Store///////////////////
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: ItemsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false /* {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      } */,
    }),
});
//console.log(store.getState());

const persistor = persistStore(store);

export { store, persistor };
