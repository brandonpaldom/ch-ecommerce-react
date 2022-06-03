import AmericanExpressIcon from '../assets/payment/american-express.svg';
import MastercardIcon from '../assets/payment/mastercard.svg';
import PayPalLogo from '../assets/payment/paypal.svg';
import VisaIcon from '../assets/payment/visa.svg';

function PaymentInfo() {
  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <p className="text-[1.5rem] leading-tight">Información de pago</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4 border-b border-neutral-100 pb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment-method"
              className="rounded-full border-transparent bg-neutral-200 text-neutral-700 focus:border-transparent focus:bg-neutral-200 focus:ring-1 focus:ring-neutral-500 focus:ring-offset-2 disabled:opacity-25"
              disabled
            />
            <span className="ml-2">PayPal</span>
          </label>
          <img src={PayPalLogo} alt="" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment-method"
                checked
                className="rounded-full border-transparent bg-neutral-200 text-neutral-700 focus:border-transparent focus:bg-neutral-200 focus:ring-1 focus:ring-neutral-500 focus:ring-offset-2 disabled:opacity-25"
                disabled
              />
              <span className="ml-2">Tarjeta de crédito o débito</span>
            </label>
            <div className="flex gap-2">
              <img src={VisaIcon} alt="" />
              <img src={MastercardIcon} alt="" />
              <img src={AmericanExpressIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="text-neutral-500">Nombre de la tarjeta</span>
              <input
                type="number"
                className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
                placeholder="Jose Brandon Palmeros Dominguez"
                disabled
              />
            </label>
            <label className="block">
              <span className="text-neutral-500">Número de tarjeta</span>
              <input
                type="number"
                className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
                placeholder="4242 4242 4242 4242"
                disabled
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-neutral-500">MM/AA</span>
                <input
                  type="number"
                  className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
                  placeholder="01/26"
                  disabled
                />
              </label>
              <label className="block">
                <span className="text-neutral-500">CVC/CVV</span>
                <input
                  type="number"
                  className="mt-1 block w-full border-transparent bg-neutral-100 py-1 px-2 focus:border-neutral-500 focus:bg-white focus:ring-0 disabled:opacity-25"
                  placeholder="123"
                  disabled
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
