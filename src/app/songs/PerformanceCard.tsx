import { SongData } from '@/lib/services/elgoose.types'

function DateDisplay({ date }: { date: string }): React.ReactNode {
  return <>{date}</>
}

export default function PerformanceCard({
  showdate,
  venuename,
  city,
  state,
  country,
  ...props
}: SongData): React.ReactNode {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-xl font-semibold leading-6 text-gray-900 dark:text-gray-200">
            <DateDisplay date={showdate} />
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
            {venuename} - {`${city}, ${state ? state : country}`}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-5xl text-gray-900 dark:text-gray-200">
          {/* placeholder idea - on hover, show upvote button */}
          {/* for mobile, maybe have a ghosted upvote image because there's no hover?? */}
          {5}
        </p>
      </div>
    </li>
  )
}
