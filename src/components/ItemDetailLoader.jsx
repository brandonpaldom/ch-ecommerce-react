import LogoLoader from '../assets/magnolia-loader.svg'

function ItemDetailLoader() {
  return (
    <div className="mx-auto grid max-w-[1024px] animate-pulse grid-cols-1 p-6 sm:grid-cols-2">
      <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded bg-neutral-200">
        <img src={LogoLoader} alt="" />
      </div>
      <div className="flex flex-col gap-4 bg-white p-6">
        <div className="h-8 w-2/3 rounded bg-neutral-200" />
        <div className="h-8 w-1/4 rounded bg-neutral-200" />
        <div className="h-4 w-full rounded bg-neutral-200" />
        <div className="h-4 w-2/3 rounded bg-neutral-200" />
        <div className="mt-2 h-4 w-1/3 rounded bg-neutral-200" />
        <div className="flex gap-4">
          <div className="h-20 w-20 rounded bg-neutral-200" />
          <div className="h-20 w-20 rounded bg-neutral-200" />
          <div className="h-20 w-20 rounded bg-neutral-200" />
        </div>
        <div className="mt-4 h-10 w-full rounded bg-neutral-200 md:w-[320px]" />
        <div className="h-10 w-full rounded bg-neutral-200 md:w-[320px]" />
      </div>
    </div>
  )
}

export default ItemDetailLoader
