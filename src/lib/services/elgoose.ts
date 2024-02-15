// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  ElgooseResponse,
  HighLevelSongData,
  SongPerformanceData,
} from './elgoose.types'

// Define a service using a base URL and expected endpoints
export const elgooseApi = createApi({
  reducerPath: 'elgoose',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://elgoose.net/api/v2/' }),
  endpoints: (builder) => ({
    getSongByName: builder.query<SongPerformanceData[], string>({
      query: (name) => `setlists/songname/${name}`,
      transformResponse: (resp: ElgooseResponse<SongPerformanceData[]>) =>
        resp.data,
    }),
    getHighLevelSongData: builder.query<HighLevelSongData[], void>({
      query: () => 'songs',
      transformResponse: (resp: ElgooseResponse<HighLevelSongData[]>) =>
        resp.data,
    }),
  }),
})

export const { useGetSongByNameQuery, useGetHighLevelSongDataQuery } =
  elgooseApi
