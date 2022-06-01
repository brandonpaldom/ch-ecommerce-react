import { Link } from 'react-router-dom';

function ShippingInfo({ shipping, createOrder }) {
  const today = new Date();
  const thirdDay = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);
  const day = thirdDay.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <p className="text-[1.5rem] leading-tight">Información de envío</p>
      <div className="grid grid-cols-1 gap-4">
        <label className="block">
          <span className="text-neutral-500">Correo electrónico</span>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            placeholder="brandon@mail.com"
            disabled
          />
        </label>
        <label className="block">
          <span className="text-neutral-500">Dirección de envío</span>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            placeholder="Jose Brandon Palmeros Dominguez"
            disabled
          />
          <select
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            disabled
          >
            <option>México</option>
          </select>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            placeholder="Calle del Sur #123, Col. Centro"
            disabled
          />
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            placeholder="Edificio 4, 3er piso"
            disabled
          />
          <div className="mt-1 grid grid-cols-2 gap-1">
            <input
              type="text"
              className="block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
              placeholder="Veracruz"
              disabled
            />
            <input
              type="text"
              className="block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
              placeholder="91700"
              disabled
            />
          </div>
          <select
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
            placeholder="Estado"
            disabled
          >
            <option>Veracruz</option>
          </select>
        </label>
      </div>
      <div className="block">
        <p className="text-neutral-500">Método de envío</p>
        {shipping >= 999 ? (
          <p className="text-green-600">Envío gratuito</p>
        ) : (
          <p>Envío estándar por $99</p>
        )}
        <p className="text-neutral-500">Llega el {day} antes de las 8:00 pm</p>
      </div>
      <button
        className="w-full self-end bg-black/10 py-2 px-4 disabled:opacity-25 md:w-max"
        disabled
      >
        Editar dirección
      </button>
      <Link
        to="/successful"
        onClick={createOrder}
        className="w-full bg-black py-2 px-4 text-center text-white md:hidden"
      >
        Comprar ahora
      </Link>
    </div>
  );
}

export default ShippingInfo;
