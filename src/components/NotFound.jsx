import ExclamationIcon from '../assets/icons/exclamation.svg';
import Button from './Button';

function NotFound() {
  return (
    <div className="-mt-16 -mb-12 grid h-screen w-full grid-cols-1 place-content-center p-6">
      <div className="flex flex-col items-center gap-4">
        <img src={ExclamationIcon} alt="" width={24} />
        <p className="text-center text-neutral-500">
          Lo sentimos, pero la página que busca no existe. Por favor, compruebe
          la URL e inténtelo de nuevo.
        </p>
        <Button link path={'/'} filled wmax>
          Regresar al inicio
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
