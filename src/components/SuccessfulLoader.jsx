function SuccessfulLoader() {
  return (
    <div className="flex animate-pulse flex-col items-center justify-center gap-2 bg-white p-6">
      <div className="h-8 w-8 rounded-full bg-neutral-200" />
      <div className="mt-2 h-8 w-2/3 rounded bg-neutral-200" />
      <div className="h-8 w-1/4 rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-full rounded bg-neutral-200" />
      <div className="h-4 w-2/3 rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-full rounded bg-neutral-200" />
      <div className="mt-4 h-10 w-full rounded bg-neutral-200 md:w-[320px]" />
      <div className="h-10 w-full rounded bg-neutral-200 md:w-[240px]" />
    </div>
  )
}

export default SuccessfulLoader
