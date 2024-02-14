'use client'
import { useGetAllPerformancesBySongQuery } from '@/lib/services/musicService'
import Loading from '../common/Loading'
import PerformanceCard from './PerformanceCard'
import SongHero from './SongHero'

export default function Song(): React.ReactNode {
  const { data, error, isLoading } = useGetAllPerformancesBySongQuery(1)

  return (
    <>
      {/** TODO: update SongHero to actually display song data */}
      <SongHero />
      {isLoading ? (
        <>
          <div className="mx-auto max-w-4xl">
            <Loading />
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-4xl">
          <ul role="list" className="divide-y divide-gray-100">
            {data && data.map((p) => <PerformanceCard key={p.id} {...p} />)}
          </ul>
        </div>
      )}
    </>
  )
}
