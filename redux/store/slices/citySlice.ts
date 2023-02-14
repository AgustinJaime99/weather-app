import { createSlice } from '@reduxjs/toolkit';

type City = {
  id: number;
  name: string;
  maxTemp: number;
  minTemp: number;
};

const initialState = {
  mainCityName: 'Melbourne',
  lat: '-37.8142176',
  lon: '144.9631608',
  favCities: [],
} as any;

const citySlice = createSlice({
  name: 'cityDetail',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return {
        ...state,
        favCities: action.payload,
      };
    },
    changeCoord: (state, action) => {
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    },
    getFavCities: (state, action) => {
      return {
        ...state?.favCities,
      };
    },
    addCity: (state, action) => {
      const cityIndex = state?.favCities?.findIndex((item: any) => item.id === action.payload.id);

      if (cityIndex <= 0) {
        state.favCities.push({
          ...action.payload,
        });
      }
    },
    removeCity: (state, action) => {
      let index = state.favCities.findIndex((item: any) => item.id === action.payload);
      if (index > -1) {
        state.favCities.splice(index, 1);
      }
    },
    changeNameCity: (state, action) => {
      return {
        ...state,
        mainCityName: action.payload,
      };
    },
  },
});

export const { changeCoord, addCity, removeCity, hydrate, changeNameCity } = citySlice.actions;

export default citySlice.reducer;
