// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Song = any

// Define a service using a base URL and expected endpoints
export const elgooseApi = createApi({
  reducerPath: 'elgoose',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://elgoose.net/api/v2/' }),
  endpoints: (builder) => ({
    getSongByName: builder.query<Song, string>({
      query: (name) => `setlists/songname/${name}`,
    }),
  }),
})

export const { useGetSongByNameQuery } = elgooseApi
