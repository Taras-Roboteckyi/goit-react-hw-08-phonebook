import { configureStore /* getDefaultMiddleware  */ } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { Api } from './items';

////////Store///////////////////
const store = configureStore({
  reducer: {
    [Api.contactsApi.reducerPath]: Api.contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.contactsApi.middleware),
});
//console.log(store.getState());

setupListeners(store.dispatch);

export { store };
