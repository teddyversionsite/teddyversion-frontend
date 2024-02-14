// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Song, Show, Performance, UserVote } from './types/musicService'

// Define a service using a base URL and expected endpoints
export const musicServiceApi = createApi({
  reducerPath: 'musicService',
  baseQuery: fetchBaseQuery({
    // for now, just the localhost path
    baseUrl: 'http://localhost:9000/musicservice/',
  }),
  endpoints: (builder) => ({
    // SONGS CONTROLLER
    getAllSongs: builder.query<Song[], null>({
      query: () => 'songs/',
    }),

    // SHOWS CONTROLLER
    getAllShows: builder.query<Show[], null>({
      query: () => 'shows/',
    }),

    // PERFORMANCES CONTROLLER
    getAllPerformances: builder.query<Performance[], null>({
      query: () => 'performances/',
    }),
    getAllPerformancesBySong: builder.query<Performance[], number>({
      query: (song_id) => `performances/?songId=${song_id}`,
    }),

    // USER VOTES CONTROLLER
    getAllUserVotes: builder.query<UserVote[], null>({
      query: () => `userVotes/`,
    }),
    saveUserVote: builder.mutation<null, number>({
      query: (performancId) => ({
        url: `userVotes/?performanceId=${performancId}`,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useGetAllSongsQuery,
  useGetAllShowsQuery,
  useGetAllPerformancesQuery,
  useGetAllPerformancesBySongQuery,
  useGetAllUserVotesQuery,
  useSaveUserVoteMutation,
} = musicServiceApi
