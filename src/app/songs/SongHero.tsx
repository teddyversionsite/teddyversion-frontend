'use client'
import { useGetHighLevelSongDataQuery } from '@/lib/services/elgoose'
import { HighLevelSongData } from '@/lib/services/elgoose.types'
import React from 'react'

function SongHeroLoading(): React.ReactNode {
  return (
    <div className="mx-auto max-w-2xl py-8 lg:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          <div className="grid grid-cols-7 gap-4">
            <div className="h-3 rounded col-span-2"></div>
            <div className="h-16 bg-slate-700 rounded col-span-3"></div>
          </div>
        </h1>
        <div className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          <div className="grid grid-cols-7 gap-4">
            <div className="h-3 rounded col-span-2"></div>
            <div className="h-5 bg-slate-700 rounded col-span-3"></div>
          </div>
        </div>
        <div className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          <div className="grid grid-cols-7 gap-4">
            <div className="h-3 rounded col-span-1"></div>
            <div className="h-5 bg-slate-700 rounded col-span-5"></div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="grid grid-cols-8 gap-4">
              <div className="h-5 bg-slate-700 rounded col-span-8"></div>
            </div>
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
          >
            <div className="grid grid-cols-7 gap-4">
              <div className="h-5 bg-slate-700 rounded col-span-7"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function SongHero({
  songId,
}: {
  songId: number
}): React.ReactNode {
  const { data, error, isLoading } = useGetHighLevelSongDataQuery()

  let songData: HighLevelSongData | undefined
  if (data) {
    songData = data.filter((s) => s.id === songId)[0]
  }

  return isLoading || !songData ? (
    <SongHeroLoading />
  ) : (
    <div className="mx-auto max-w-2xl py-8 lg:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
          {songData.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          {`Song by ${songData.original_artist}`}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          Collapsable lyrics section here maybe????
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Link to bandcamp???
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
          >
            Link to elgoose??? <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
