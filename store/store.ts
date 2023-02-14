import { getApi } from '@/services/getApi';
import citySlice from '@/slices/testSlice';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['weatherApi'],
};

export const rootReducers = combineReducers({
  cityDetail: citySlice,
  [getApi.reducerPath]: getApi.reducer,
});

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducers);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: true,
        },
      }).concat(getApi.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = makeStore();

setupListeners(store.dispatch);
