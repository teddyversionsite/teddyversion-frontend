export type ElgooseResponse<Type> = {
  error: number
  error_message: string
  data: Type
}

export type SongData = {
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

// {
//     "uniqueid": "8476",
//     "show_id": 1621488565,
//     "showdate": "2021-05-08",
//     "showtitle": "",
//     "artist": "Goose",
//     "song_id": 677,
//     "songname": "Moby",
//     "artist_id": 1,
//     "permalink": "goose-may-8-2021-the-caverns-above-ground-amphitheater-pelham-tn-usa.html",
//     "settype": "Set",
//     "setnumber": "2",
//     "position": 11,
//     "transition_id": 1,
//     "transition": ", ",
//     "footnote": "FTP.",
//     "isjamchart": 0,
//     "jamchart_notes": null,
//     "venue_id": 238,
//     "shownotes": "This show marked lighting designer Andrew Goedde's 26th birthday and featured the first live full-band acoustic performance.",
//     "showyear": 2021,
//     "showorder": 1,
//     "opener": "",
//     "tour_id": 26,
//     "tourname": "Shenanigans Summer Tour 2021",
//     "soundcheck": "",
//     "isverified": 1,
//     "slug": "moby",
//     "isoriginal": 1,
//     "original_artist": "",
//     "venuename": "The Caverns Above Ground Amphitheater",
//     "city": "Pelham",
//     "state": "TN",
//     "country": "USA",
//     "isreprise": 0,
//     "isjam": 0
// }
