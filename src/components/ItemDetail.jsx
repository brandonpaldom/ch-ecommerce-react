import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Shipping from './Shipping';

function ItemDetail({ item }) {
  const { id, title, description, price, newArticle, stock, variations } = item;

  const [hideCount, setHideCount] = useState('hide');
  const [color, setColor] = useState(variations[0].img);
  const [viewColor, setViewColor] = useState(variations[0].color);
  const [isActive, setIsActive] = useState(0);

  const {
    almostOutOfStock,
    setAlmostOutOfStock,
    overstock,
    setOverstock,
    addToCart,
  } = useCartContext();

  function onAdd(quantityToAdd) {
    addToCart({ item, quantityToAdd, color, viewColor });
  }

  function onShowCount() {
    setHideCount('show');
  }

  function selectColor(index) {
    setColor(variations[index].img);
    setViewColor(variations[index].color);
    setIsActive(index);
  }

  return (
    <div key={id} className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <img src={color} alt="" />
          {newArticle && (
            <span className="absolute top-6 left-6 bg-black/10 p-1 text-xs leading-none">
              Nuevo
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 bg-white p-6">
          <h1 className="text-[1.5rem] leading-tight">{title}</h1>
          <p className="text-[1.5rem] leading-tight">${price}</p>
          <p className="text-neutral-500">{description}</p>
          <p>Elige tu tono perfecto:</p>
          <div className="flex gap-4">
            {variations.map(({ img }, index) => (
              <img
                key={index}
                onClick={() => {
                  selectColor(index);
                  setAlmostOutOfStock(false);
                  setOverstock(false);
                }}
                src={img}
                alt=""
                className={`${
                  isActive === index && 'outline outline-1'
                } aspect-square w-20 cursor-pointer object-cover hover:opacity-90`}
              />
            ))}
          </div>
          <p className="text-[0.875rem] text-neutral-500">{viewColor}</p>
          {!overstock && (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={onAdd}
              onShowCount={onShowCount}
            />
          )}
          {almostOutOfStock && (
            <p className="text-red-600">
              Estás a punto de agregar más productos que el stock disponible
            </p>
          )}
          {overstock && (
            <p className="text-green-600">
              {`Ya has agregado el máximo de ${stock} piezas permitidas por color.`}
            </p>
          )}
          {hideCount === 'show' && (
            <div className="flex w-full flex-col gap-4 text-center md:w-[320px]">
              <Link
                to="/cart"
                onClick={(event) => {
                  setAlmostOutOfStock(false);
                  setOverstock(false);
                }}
                className="w-full bg-black/10 p-2"
              >
                Ir al carrito
              </Link>
              <Link
                to="/"
                className="w-full border border-black py-2 px-4 md:w-[320px]"
              >
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
      <Shipping />
    </div>
  );
}

export default ItemDetail;
