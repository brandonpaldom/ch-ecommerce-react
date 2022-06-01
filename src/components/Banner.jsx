import { ReactComponent as CrossIcon } from '../assets/icons/cross.svg';

function Banner({ handleCloseBanner }) {
  return (
    <div className="relative flex h-9 w-full items-center justify-center bg-black  text-[0.875rem] text-white">
      <p className="animate-pulse">
        Envíos sin costo en compras mayores a $999
      </p>
      <div
        onClick={handleCloseBanner}
        className="absolute right-0 flex h-9 w-9 cursor-pointer items-center justify-center bg-black hover:bg-neutral-900"
      >
        <CrossIcon className="h-2 w-2 cursor-pointer fill-white" />
      </div>
    </div>
  );
}

export default Banner;
