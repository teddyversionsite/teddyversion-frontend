'use client'
import { useGetSongByNameQuery } from '../../lib/services/elgoose'
import PerformanceCard, { PerformanceProps } from './PerformanceCard'
import SongHero from './SongHero'

// Moby
const performances: PerformanceProps[] = [
  {
    date: '2021-06-19',
    venue: 'Legend Valley',
    city: 'Thornville, OH',
    voteTotal: 12,
  },
  {
    date: '2023-09-22',
    venue: 'Kettlehouse Amphitheater',
    city: 'Bonner, MT',
    voteTotal: 14,
  },
  {
    date: '2022-02-07',
    venue: 'The ELM',
    city: 'Bozeman, MT',
    voteTotal: 2,
  },
  {
    date: '2022-12-16',
    venue: '1STBANK Center',
    city: 'Broomfield, CO',
    voteTotal: 9,
  },
]

export default function Song(): React.ReactNode {
  const moby = useGetSongByNameQuery('moby')
  console.log(moby)
  return (
    <>
      <SongHero />
      <div className="mx-auto max-w-4xl">
        <ul role="list" className="divide-y divide-gray-100">
          {performances
            .sort((a, b) => b.voteTotal - a.voteTotal)
            .map((p) => (
              <PerformanceCard key={p.date} {...p} />
            ))}
        </ul>
      </div>
    </>
  )
}
