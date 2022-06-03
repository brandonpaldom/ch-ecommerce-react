import BoxIcon from '../assets/icons/box.svg';
import InfoIcon from '../assets/icons/info.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import TruckIcon from '../assets/icons/truck.svg';

function Shipping() {
  const features = [
    {
      icon: TruckIcon,
      title: 'Envíos de 2 a 5 días hábiles en nuestros productos. *',
    },
    {
      icon: BoxIcon,
      title: 'Envíos sin costo en compras mayores a $999.',
    },
    {
      icon: InfoIcon,
      title:
        'Devolución sin costo los primeros 7 días a partir de la compra. **',
    },
    {
      icon: PhoneIcon,
      title: '¿Dudas o aclaraciones? Comunícate con nosotros.',
    },
  ];

  const disclaimers = [
    {
      title:
        '* El vendedor no puede garantizar que el envío llegue en el plazo indicado. El envío podría retrasarse debido a las condiciones meteorológicas, el transporte u otras condiciones ajenas al control del vendedor.',
    },
    {
      title:
        '** El vendedor no es responsable de los gastos de envío de la devolución. El comprador es responsable de que la devolución llegue dentro del plazo establecido. El vendedor no se hace responsable de los daños que puedan producirse durante el envío de la devolución.',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-white p-6 sm:grid-cols-4">
        {features.map(({ icon, title }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <img src={icon} alt="" width={16} />
            <p className="text-[0.875rem] text-neutral-500">{title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-[0.75rem] text-neutral-500">
        {disclaimers.map(({ title }, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    </>
  );
}

export default Shipping;
