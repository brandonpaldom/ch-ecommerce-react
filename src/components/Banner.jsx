import CrossCartIcon from '../assets/icons/cross.svg'

function Banner({ text, handleCloseBanner }) {
  return (
    <div className="relative flex h-9 w-full items-center justify-center bg-black  text-[0.875rem] text-white">
      <p className="animate-pulse">{text}</p>
      <div
        onClick={handleCloseBanner}
        className="absolute right-0 flex h-9 w-9 cursor-pointer items-center justify-center bg-black hover:bg-neutral-900"
      >
        <img src={CrossCartIcon} alt="" width={8} />
      </div>
    </div>
  )
}

export default Banner
