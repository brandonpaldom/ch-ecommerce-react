function OrderLoader() {
  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <div className="h-8 w-2/3 rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-3/4 rounded bg-neutral-200" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="h-[120px] w-[120px] bg-neutral-200" />
          <div className="flex grow flex-col justify-center gap-4">
            <div className="flex justify-between gap-4">
              <div className="h-4 w-full rounded bg-neutral-200 md:w-1/4" />
              <div className="h-4 w-1/12 rounded bg-neutral-200" />
            </div>
            <div className="h-4 w-2/3 rounded bg-neutral-200" />
            <div className="h-4 w-2/3 rounded bg-neutral-200 md:w-1/3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderLoader
