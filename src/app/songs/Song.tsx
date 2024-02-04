'use client'
import { useGetSongByNameQuery } from '../../lib/services/elgoose'
import Loading from '../common/Loading'
import PerformanceCard from './PerformanceCard'
import SongHero from './SongHero'

export default function Song(): React.ReactNode {
  const { data, error, isLoading } = useGetSongByNameQuery('Echo+of+a+Rose')
  console.log(data && data.data)

  return (
    <>
      {/** TODO: update SongHero to actually display song data */}
      <SongHero />
      {isLoading ? (
        <>
          {/** TODO: fix loading skeleton to look like actual song display */}
          <Loading />
        </>
      ) : (
        <div className="mx-auto max-w-4xl">
          <ul role="list" className="divide-y divide-gray-100">
            {data &&
              data.data.map((p) => <PerformanceCard key={p.uniqueid} {...p} />)}
          </ul>
        </div>
      )}
    </>
  )
}
