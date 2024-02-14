export default function Loading(): React.ReactNode {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-xl5 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-6 gap-4">
              <div className="h-3 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="h-1 rounded col-span-11"></div>
              <div className="h-10 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
