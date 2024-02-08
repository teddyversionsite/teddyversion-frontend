/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2024-02-06 16:52:15.

export interface Performance {
  id: number
  song: Song
  show: Show
}

export interface Show {
  id: number
  showDate: Date
  venue: string
  city: string
  state: string
  country: string
}

export interface Song {
  id: number
  displayName: string
}

export interface User {
  id: number
}

export interface UserVote {
  id: number
  user: User
  performance: Performance
}
