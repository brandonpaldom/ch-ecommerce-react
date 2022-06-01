import { Link } from 'react-router-dom';
import ShoppingBagAddIcon from '../assets/icons/shopping-bag-add.svg';

function EmptyCart() {
  return (
    <div className="grid h-[320px] w-full grid-cols-1 place-content-center p-6">
      <div className="flex flex-col items-center gap-4">
        <img src={ShoppingBagAddIcon} alt="" width={24} />
        <p className="text-center text-neutral-500">
          Su cesta de la compra está actualmente vacía.
        </p>
        <Link to="/" className="w-max bg-black/10 py-2 px-4">
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
