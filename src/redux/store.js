import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { ItemsSlice } from './items';

const contactsPersistConfig = {
  key: 'contactsKey',
  storage,
  blacklist: ['filter'], //Забирає властивість filter з localstorage, також існує whitelist-який включає властивість в localstorage
};

////////Store///////////////////
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, ItemsSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//console.log(store.getState());

const persistor = persistStore(store);

export { store, persistor };
