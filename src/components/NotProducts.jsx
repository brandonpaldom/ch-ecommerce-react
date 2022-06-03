import { Link } from 'react-router-dom';

function NotProducts() {
  return (
    <div className="grid h-[320px] w-full grid-cols-1 place-content-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-neutral-500">
          Lo sentimos, no hay productos en esta categoría en este momento. Por
          favor, vuelva a comprobarlo pronto.
        </p>
        <Link to="/" className="w-max bg-black px-4 py-2 text-white">
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotProducts;
