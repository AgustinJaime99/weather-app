import { getApi } from '@/services/getApi';
import citySlice from '@/slices/testSlice';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export function makeStore() {
  return configureStore({
    reducer: {
      cityDetail: citySlice,
      [getApi.reducerPath]: getApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getApi.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = makeStore();

setupListeners(store.dispatch);
