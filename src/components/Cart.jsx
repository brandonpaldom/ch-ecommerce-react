import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import EmptyCart from './EmptyCart';
import Shipping from './Shipping';
import ShippingInformation from './ShippingInformation';

function Cart() {
  const { cartList, removeFromCart, emptyCart } = useCartContext();

  const subtotal = cartList
    .map(({ item, quantityToAdd }) => quantityToAdd * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex h-max w-full flex-col gap-4 bg-white p-6 md:w-2/3">
              <p className="text-[1.5rem] leading-tight">Mi carrito</p>
              <div className="flex flex-col gap-4">
                {cartList.map(
                  ({ item, quantityToAdd, color, viewColor }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 border-b border-neutral-100 pb-4 md:flex-row"
                    >
                      <div>
                        <img
                          src={color}
                          alt=""
                          className="aspect-square w-[120px] object-cover"
                        />
                      </div>
                      <div className="flex w-full flex-col pt-0 md:w-3/4 md:pt-4">
                        <div className="flex items-center justify-between">
                          <p className="leading-tight">{item.title}</p>
                          <p className="leading-tight">
                            ${item.price * quantityToAdd}
                          </p>
                        </div>
                        <p className="text-neutral-500">{viewColor}</p>
                        <p className="text-neutral-500">
                          Cantidad {quantityToAdd}
                        </p>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="w-max self-end text-neutral-500 hover:underline"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex w-full flex-col gap-2 md:w-2/3">
                <div className="flex justify-between">
                  <p className="text-neutral-500">Subtotal</p>
                  <p className="text-neutral-500">${subtotal}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-neutral-500">Gastos de envío</p>
                  <p className="text-neutral-500">
                    {`$${subtotal >= 999 ? '0' : '99'}`}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>{`$${subtotal >= 999 ? subtotal : subtotal + 99}`}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col justify-end gap-4 text-center md:flex-row">
                <button
                  onClick={emptyCart}
                  className="w-full border border-black py-2 px-4 md:w-max"
                >
                  Vaciar carrito
                </button>
                <Link to="/" className="w-full bg-black/10 py-2 px-4 md:w-max">
                  Seguir comprando
                </Link>
                <Link
                  to="/successful"
                  onClick={emptyCart}
                  className="w-full bg-black py-2 px-4 text-white md:w-max"
                >
                  Comprar ahora
                </Link>
              </div>
            </div>
            <div className="h-max w-full bg-white p-6 md:w-1/3">
              <p className="text-[1.5rem] leading-tight">
                Información de envío
              </p>
              <ShippingInformation shipping={subtotal} />
            </div>
          </div>
          <Shipping />
        </div>
      )}
    </>
  );
}

export default Cart;
