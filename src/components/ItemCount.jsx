import { useState } from 'react';
import MinusIcon from '../assets/icons/minus-small.svg';
import PlusIcon from '../assets/icons/plus-small.svg';

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  function onAdd() {
    if (count <= stock) console.log(`Añadiste ${count} al carrito`);
  }

  return (
    <div className="flex w-full flex-col gap-4 md:w-[320px]">
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
        onClick={onAdd}
        className={`${
          stock === 0 && 'opacity-20'
        } w-full border border-black p-2`}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
      <button
        className={`${
          stock === 0 && 'opacity-20'
        } w-full bg-black p-2 text-white`}
        disabled={stock === 0}
      >
        Comprar ahora
      </button>
    </div>
  );
}

export default ItemCount;
