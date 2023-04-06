import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'localhost:8080/users',
  }),
  endpoints: (builder) => ({
    profileExists: builder.query<boolean, string>({
      query: () => '/',
    }),
  }),
})

export const { useProfileExistsQuery } = usersApi
