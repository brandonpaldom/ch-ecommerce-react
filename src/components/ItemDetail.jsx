import ItemCount from './ItemCount';
import TruckIcon from '../assets/icons/truck.svg';
import BoxIcon from '../assets/icons/box.svg';
import InfoIcon from '../assets/icons/info.svg';
import PhoneIcon from '../assets/icons/phone.svg';

function ItemDetail({ item }) {
  const { id, title, description, price, pictureUrl, newArticle, stock } = item;

  return (
    <div key={id} className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <img src={pictureUrl} alt="" />
          {newArticle && (
            <div className="absolute top-6 left-6 bg-black/10 p-1 text-xs leading-none">
              Nuevo
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 bg-white p-6">
          <h1 className="text-[1.5rem] leading-tight">{title}</h1>
          <div>
            <span className="text-[1.5rem] leading-tight">${price}</span>
          </div>
          <p className="text-neutral-500">{description}</p>
          {stock <= 5 && stock >= 1 && (
            <p className="text-amber-600">
              ¡Date prisa! Solo quedan {stock} piezas disponibles
            </p>
          )}
          {stock === 0 && <p className="text-red-600">itemo agotado</p>}
          <ItemCount stock={stock} initial={1} />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 bg-white p-6 sm:grid-cols-4">
        <div className="flex flex-col gap-2">
          <img src={TruckIcon} alt="" width={16} />
          <p className="text-[0.875rem] text-neutral-500">
            Envíos de 2 a 5 días hábiles en nuestros itemos. *
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
