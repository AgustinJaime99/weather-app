import { createSlice } from '@reduxjs/toolkit';

type City = {
  id: number;
  name: string;
  maxTemp: number;
  minTemp: number;
};

const initialState = {
  lat: '-37.81',
  lon: '144.96',
  favCities: [],
} as any;

const citySlice = createSlice({
  name: 'cityDetail',
  initialState,
  reducers: {
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
      const cityIndex = state.favCities.findIndex((item: any) => item.id === action.payload.id);

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
  },
});

export const { changeCoord, addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
