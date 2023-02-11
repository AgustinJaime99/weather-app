import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getWeatherByName: builder.query({
      query: (name: string) => `geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByNameQuery } = getApi;
