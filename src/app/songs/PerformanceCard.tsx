'use client'
import { useSaveUserVoteMutation } from '@/lib/services/musicService'
import { Performance } from '@/lib/services/types/musicService'

function DateDisplay({ date }: { date: Date }): React.ReactNode {
  return <>{date}</>
}

export default function PerformanceCard({
  show,
  song,
  ...performance
}: Performance): React.ReactNode {
  const [saveVote, errors] = useSaveUserVoteMutation()

  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-xl5 w-full mx-auto">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-xl font-semibold leading-6 text-gray-900 dark:text-gray-200">
              <DateDisplay date={show.showDate} />
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
              {show.venue} -{' '}
              {`${show.city}, ${show.state ? show.state : show.country}`}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p
            className="text-5xl text-gray-900 dark:text-gray-200"
            onClick={() => saveVote(performance.id)}
          >
            {/* placeholder idea - on hover, show upvote button */}
            {/* for mobile, maybe have a ghosted upvote image because there's no hover?? */}
            {5}
          </p>
        </div>
      </div>
    </li>
  )
}
