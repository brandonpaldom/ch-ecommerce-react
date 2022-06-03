function ShippingInfo({ shipping }) {
  const today = new Date();
  const thirdDay = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);
  const day = thirdDay.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="flex h-max w-full flex-col gap-4 bg-white p-6 md:w-1/3">
      <p className="text-[1.5rem] leading-tight">Resumen de compra</p>
      <div className="flex w-full flex-col gap-2 border-b border-neutral-100 pb-4">
        <div className="flex justify-between">
          <p className="text-neutral-500">Subtotal</p>
          <p className="text-neutral-500">${shipping}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-500">Gastos de envío</p>
          <p className="text-neutral-500">
            {`$${shipping >= 999 ? '0' : '99'}`}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{`$${shipping >= 999 ? shipping : shipping + 99}`}</p>
        </div>
      </div>
      <p className="text-[1.5rem] leading-tight">Información de envío</p>
      <div className="block">
        <p className="text-neutral-500">Método de envío</p>
        {shipping >= 999 ? (
          <p className="text-green-600">Envío gratuito</p>
        ) : (
          <p>Envío estándar por $99</p>
        )}
        <p className="text-neutral-500">Llega el {day} antes de las 8:00 pm</p>
      </div>
    </div>
  );
}

export default ShippingInfo;
