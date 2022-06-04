import { Link } from 'react-router-dom';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';
import { useCartContext } from '../context/CartContext';
import Button from './Button';
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
          <Button link path={`/order/${getOrderId}`} filled wmax>
            Ver detalles de la compra
          </Button>
          <p>
            Gracias por su compra. Su pedido ha sido procesado y será enviado lo
            antes posible.
          </p>
          <Button link path={'/'} standard wmax>
            Seguir comprando
          </Button>
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
