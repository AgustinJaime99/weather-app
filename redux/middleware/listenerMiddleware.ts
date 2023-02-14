import { createListenerMiddleware, addListener, isAnyOf } from '@reduxjs/toolkit';
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from '@/redux/store/store';
import { addCity, removeCity } from '../store/slices/citySlice';

export const AddCityMiddleware = createListenerMiddleware();
AddCityMiddleware.startListening({
  matcher: isAnyOf(addCity, removeCity),
  effect: async (action, listenerApi) => {
    let storage: any = listenerApi.getState();
    localStorage.setItem('fav_cities', JSON.stringify(storage?.cityDetail?.favCities as RootState));
  },
});

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

export const startAppListening = AddCityMiddleware.startListening as AppStartListening;
