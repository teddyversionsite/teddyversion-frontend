import PerformanceCard, { PerformanceProps } from './PerformanceCard'

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
  return (
    <div className="mx-auto max-w-4xl">
      <ul role="list" className="divide-y divide-gray-100">
        {performances
          .sort((a, b) => b.voteTotal - a.voteTotal)
          .map((p) => (
            <PerformanceCard key={p.date} {...p} />
          ))}
      </ul>
    </div>
  )
}

/*
<ul role="list" class="divide-y divide-gray-100">
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
*/
