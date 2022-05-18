import ItemCount from './ItemCount';
import TruckIcon from '../assets/icons/truck.svg';
import BoxIcon from '../assets/icons/box.svg';
import InfoIcon from '../assets/icons/info.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {
  const {
    id,
    title,
    description,
    price,
    newArticle,
    category,
    stock,
    variations,
  } = item;

  const [hideCount, setHideCount] = useState('show');
  const [color, setColor] = useState(variations[0].img);
  const [viewColor, setViewColor] = useState(variations[0].color);
  const [isActive, setIsActive] = useState(0);

  function onAdd(quantityToAdd) {
    alert(
      `${quantityToAdd} "${title}" color "${viewColor}" fue añadida al carrito`
    );
  }

  function onShowCount() {
    setHideCount('hide');
  }

  function selectColor(index) {
    setColor(variations[index].img);
    setViewColor(variations[index].color);
    setIsActive(index);
  }

  function translateCategory(category) {
    switch (category) {
      case 'woman':
        return 'Mujer';
      case 'man':
        return 'Hombre';
      case 'beauty':
        return 'Belleza';
      default:
    }
  }

  return (
    <div key={id} className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
      <div className="flex flex-wrap gap-1 text-[0.875rem] text-neutral-500">
        <Link to="/" className="hover:underline">
          Tienda
        </Link>
        <span>/</span>
        <Link to={`/category/${category}`} className="hover:underline">
          {translateCategory(category)}
        </Link>
        <span>/</span>
        <span className="text-black">{title}</span>
      </div>
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
                onClick={() => selectColor(index)}
                src={img}
                alt=""
                className={`${
                  isActive === index && 'outline outline-1'
                } aspect-square w-20 cursor-pointer object-cover hover:opacity-90`}
              />
            ))}
          </div>
          <p className="text-[0.875rem] text-neutral-500">{viewColor}</p>
          {hideCount === 'show' ? (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={onAdd}
              onShowCount={onShowCount}
            />
          ) : (
            <div className="flex w-full flex-col gap-4 text-center md:w-[320px]">
              <Link to="/cart" className="w-full border border-black p-2">
                Ir al carrito
              </Link>
              <Link to="/" className="w-full bg-black p-2 text-white">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 bg-white p-6 sm:grid-cols-4">
        <div className="flex flex-col gap-2">
          <img src={TruckIcon} alt="" width={16} />
          <p className="text-[0.875rem] text-neutral-500">
            Envíos de 2 a 5 días hábiles en nuestros productos. *
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={BoxIcon} alt="" width={16} />
          <p className="text-[0.875rem] text-neutral-500">
            Envíos sin costo en compras mayores a $999.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={InfoIcon} alt="" width={16} />
          <p className="text-[0.875rem] text-neutral-500">
            Devolución sin costo los primeros 7 días a partir de la compra. **
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={PhoneIcon} alt="" width={16} />
          <p className="text-[0.875rem] text-neutral-500">
            ¿Dudas o aclaraciones? Comunícate con nosotros.
          </p>
        </div>
      </div>
      <div className="flex flex-col text-[0.75rem] text-neutral-500">
        <p>
          * El vendedor no puede garantizar que el envío llegue en el plazo
          indicado. El envío podría retrasarse debido a las condiciones
          meteorológicas, el transporte u otras condiciones ajenas al control
          del vendedor.
        </p>
        <p>
          ** El vendedor no es responsable de los gastos de envío de la
          devolución. El comprador es responsable de que la devolución llegue
          dentro del plazo establecido. El vendedor no se hace responsable de
          los daños que puedan producirse durante el envío de la devolución.
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
