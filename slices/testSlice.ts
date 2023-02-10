import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchApi = createAsyncThunk('city/getAllInfo', async (thunkApi) => {
  const response = await fetch('url');
  const data = await response.json();
  return data;
});

const initialState = {
  entities: [],
} as any;

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
    });
  },
});

export default testSlice.reducer;
