export type ElgooseResponse<Type> = {
  error: number
  error_message: string
  data: Type
}

export type SongPerformanceData = {
  uniqueid: number
  show_id: number
  showdate: string
  showtitle: string | null
  artist: string
  song_id: number
  songname: string
  permalink: string
  slug: string
  venuename: string
  city: string
  state: string
  country: string
}

export type HighLevelSongData = {
  id: number
  name: string
  slug: string
  isoriginal: boolean
  original_artist: string
  created_at: string
  updated_at: string
}
