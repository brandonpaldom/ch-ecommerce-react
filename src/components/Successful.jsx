import { Link } from 'react-router-dom';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';

function Successful() {
  return (
    <div className="mx-auto grid max-w-[1024px] grid-cols-1 p-6 sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 text-center">
        <InfoIcon className="h-8 w-8 animate-bounce fill-green-600" />
        <h1 className="text-[1.5rem] leading-tight">
          ¡Su compra se ha completado con éxito!
        </h1>
        <p>
          Gracias por su compra. Su pedido ha sido procesado y será enviado lo
          antes posible. Recibirá un correo electrónico de confirmación con los
          detalles de su pedido.
        </p>
        <p className="text-[0.875rem] text-neutral-500">
          Si tienes alguna duda, ponte en contacto con nuestro equipo de
          atención al cliente en{' '}
          <span className="text-black hover:underline">
            clientes@magnolia.com
          </span>
        </p>
        <Link to="/" className="w-full bg-black py-2 px-4 text-white md:w-max">
          Seguir comprando
        </Link>
      </div>
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
