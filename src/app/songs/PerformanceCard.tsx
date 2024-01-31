function DateDisplay({ date }: { date: string }): React.ReactNode {
  return <p>{date}</p>
}

export type PerformanceProps = {
  date: string
  venue: string
  city: string
  voteTotal: number
}

export default function PerformanceCard({
  date,
  venue,
  city,
  voteTotal,
  ...props
}: PerformanceProps): React.ReactNode {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-xl font-semibold leading-6 text-gray-900 dark:text-gray-200">
            <DateDisplay date={date} />
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
            {venue} - {city}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-5xl text-gray-900 dark:text-gray-200">
          {/* placeholder idea - on hover, show upvote button */}
          {/* for mobile, maybe have a ghosted upvote image because there's no hover?? */}
          {voteTotal}
        </p>
      </div>
    </li>
  )
}
