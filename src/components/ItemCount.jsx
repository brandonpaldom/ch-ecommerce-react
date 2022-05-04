import { useState } from 'react';
import MinusIcon from '../assets/icons/minus-small.svg';
import PlusIcon from '../assets/icons/plus-small.svg';

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex w-[240px] flex-col items-center gap-2">
      <div className="flex w-full items-center justify-between rounded-lg border border-yellow-500 p-1">
        <button
          onClick={() => setCount(count - 1)}
          className={`${count <= initial ? 'opacity-10' : null}`}
          disabled={count <= initial}
        >
          <img src={MinusIcon} alt="" width={24} />
        </button>
        <span className="text-center font-semibold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className={`${count >= stock ? 'opacity-10' : null}`}
          disabled={count >= stock}
        >
          <img src={PlusIcon} alt="" width={24} />
        </button>
      </div>
      {stock === 0 && <p className="text-red-600">Producto agotado</p>}
    </div>
  );
}

export default ItemCount;
