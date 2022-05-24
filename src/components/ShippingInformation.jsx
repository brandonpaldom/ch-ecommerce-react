function Shipping({ shipping }) {
  const today = new Date();
  const thirdDay = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);
  const day = thirdDay.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-neutral-500">Correo electrónico</span>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            placeholder="brandon@mail.com"
            disabled
          />
        </label>
        <label className="block">
          <span className="text-neutral-500">Dirección de envío</span>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            placeholder="Brandon Palmeros"
            disabled
          />
          <select
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            disabled
          >
            <option>México</option>
          </select>
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            placeholder="Calle del Sur #123, Col. Centro"
            disabled
          />
          <input
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            placeholder="Edificio 4, 3er piso"
            disabled
          />
          <div className="mt-1 grid grid-cols-2 gap-1">
            <input
              type="text"
              className="block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
              placeholder="Veracruz"
              disabled
            />
            <input
              type="text"
              className="block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
              placeholder="91700"
              disabled
            />
          </div>
          <select
            type="text"
            className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-50"
            placeholder="Estado"
            disabled
          >
            <option>Veracruz</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-neutral-500">Método de envío</span>
        {shipping >= 999 ? (
          <p className="text-green-600">Envío gratuito</p>
        ) : (
          <p>Envío estándar por $99</p>
        )}
        <p className="text-neutral-500">Llega el {day} antes de las 8:00 pm</p>
      </label>
      <button
        className="w-full self-end bg-black/10 py-2 px-4 disabled:opacity-50 md:w-max"
        disabled
      >
        Editar dirección
      </button>
    </div>
  );
}

export default Shipping;
