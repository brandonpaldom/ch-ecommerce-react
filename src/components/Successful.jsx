import { Link } from 'react-router-dom';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';
import { useCartContext } from '../context/CartContext';
import SuccessfulLoader from './SuccessfulLoader';

function Successful() {
  const { getOrderId } = useCartContext();

  return (
    <div className="mx-auto grid max-w-[1024px] grid-cols-1 p-6 sm:grid-cols-2">
      {getOrderId ? (
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 text-center">
          <InfoIcon className="h-8 w-8 animate-bounce fill-green-600" />
          <h1 className="text-[1.5rem] leading-tight">
            ¡Su compra <Link to={`/order/${getOrderId}`}>#{getOrderId}</Link> se
            ha completado con éxito!
          </h1>
          <Link
            to={`/order/${getOrderId}`}
            className="w-full bg-black/10 py-2 px-4 md:w-max"
          >
            Ver detalles de mi pedido
          </Link>
          <p>
            Gracias por su compra. Su pedido ha sido procesado y será enviado lo
            antes posible.
          </p>
          <Link
            to="/"
            className="w-full bg-black py-2 px-4 text-white md:w-max"
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <SuccessfulLoader />
      )}
      <div>
        <img
          src="https://res.cloudinary.com/dlomynswh/image/upload/v1653674108/ch-ecommerce/successful_dj9qqd.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Successful;
