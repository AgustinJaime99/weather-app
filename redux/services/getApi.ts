import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Props {
  lat: string;
  lon: string;
}

export const getApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getWeatherByName: builder.query({
      query: (name: string) => `geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`,
    }),
    getCityDetail: builder.query({
      query: ({ lat, lon }: Props) => `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    }),
    getForecast: builder.query({
      query: ({ lat, lon }: Props) => `data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByNameQuery, useGetCityDetailQuery, useGetForecastQuery } = getApi;
