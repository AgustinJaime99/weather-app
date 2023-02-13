import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: '-37.81',
  lon: '144.96',
};

const citySlice = createSlice({
  name: 'cityDetail',
  initialState,
  reducers: {
    changeCoord: (state, action) => action.payload,
  },
});

export default citySlice.reducer;
