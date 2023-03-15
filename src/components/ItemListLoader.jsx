import LogoLoader from '../assets/magnolia-loader.svg'

function ItemLoader() {
  return (
    <div className="flex animate-pulse flex-col gap-2">
      <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded bg-neutral-200">
        <img src={LogoLoader} alt="" />
      </div>
      <div className="h-4 w-2/3 rounded bg-neutral-200" />
      <div className="h-4 w-1/3 rounded bg-neutral-200" />
    </div>
  )
}

export default ItemLoader
