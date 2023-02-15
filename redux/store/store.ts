import { getApi } from '@/redux/services/getApi';
import citySlice from '@/redux/store/slices/citySlice';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { AddCityMiddleware } from '../middleware/listenerMiddleware';

export const rootReducers = combineReducers({
  cityDetail: citySlice,
  [getApi.reducerPath]: getApi.reducer,
});

export function makeStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getApi.middleware).prepend(AddCityMiddleware.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const store = makeStore();
setupListeners(store.dispatch);
