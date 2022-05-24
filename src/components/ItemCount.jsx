import { useState } from 'react';
import { Link } from 'react-router-dom';
import MinusIcon from '../assets/icons/minus-small.svg';
import PlusIcon from '../assets/icons/plus-small.svg';

function ItemCount({ stock, initial, onAdd, onShowCount, itemExists }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex w-full flex-col gap-4 md:w-[320px]">
      {stock <= 5 && stock >= 1 && (
        <p className="text-amber-600">
          {`¡Date prisa! Solo ${stock > 1 ? 'quedan' : 'queda'} ${stock} ${
            stock > 1 ? 'piezas' : 'pieza'
          } ${stock > 1 ? 'disponibles' : 'disponible'}`}
        </p>
      )}
      {stock === 0 && (
        <p className="text-red-600">Este producto está agotado.</p>
      )}
      <div className="flex w-full items-center justify-between border border-neutral-300 p-2">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className={count <= initial ? 'opacity-10' : undefined}
          disabled={count <= initial}
        >
          <img src={MinusIcon} alt="" width={24} />
        </button>
        <span className="text-center font-semibold">{count}</span>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className={count >= stock ? 'opacity-10' : undefined}
          disabled={count >= stock}
        >
          <img src={PlusIcon} alt="" width={24} />
        </button>
      </div>
      <button
        onClick={(event) => {
          onShowCount();
          onAdd(count);
        }}
        className={`${
          stock === 0 && 'opacity-20'
        } w-full bg-black p-2 text-white`}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
      {stock > 5 && (
        <p className="text-[0.875rem] text-neutral-500">
          Disponibles: {stock} piezas
        </p>
      )}
      {itemExists && (
        <p className="text-neutral-500">
          Ya tienes este producto en tu{' '}
          <Link to="/cart" className="text-black hover:underline">
            carrito
          </Link>
        </p>
      )}
    </div>
  );
}

export default ItemCount;
