import { getApi } from '@/services/getHome';
import testSlice from '@/slices/testSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export function makeStore() {
  return configureStore({
    reducer: {
      testReducer: testSlice,
      [getApi.reducerPath]: getApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getApi.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = makeStore();

setupListeners(store.dispatch);
