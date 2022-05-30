import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import PaymentInfo from './PaymentInfo';
import Shipping from './Shipping';
import ShippingInfo from './ShippingInfo';

function Cart() {
  const { cartList, removeFromCart, emptyCart } = useCartContext();

  const subTotal = cartList
    .map(({ item, quantityToAdd }) => quantityToAdd * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:w-2/3">
              <div className="flex h-max w-full flex-col gap-4 bg-white p-6">
                <p className="text-[1.5rem] leading-tight">Mi carrito</p>
                <div className="flex flex-col gap-4">
                  {cartList.map((cartItem, index) => (
                    <CartItem
                      {...cartItem}
                      key={index}
                      removeFromCart={() => removeFromCart(index)}
                    />
                  ))}
                </div>
                <div className="flex w-full flex-col gap-2 md:w-2/3">
                  <div className="flex justify-between">
                    <p className="text-neutral-500">Subtotal</p>
                    <p className="text-neutral-500">${subTotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-neutral-500">Gastos de envío</p>
                    <p className="text-neutral-500">
                      {`$${subTotal >= 999 ? '0' : '99'}`}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p>{`$${subTotal >= 999 ? subTotal : subTotal + 99}`}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col justify-end gap-4 text-center md:flex-row">
                  <button
                    onClick={emptyCart}
                    className="w-full border border-black py-2 px-4 md:w-max"
                  >
                    Vaciar carrito
                  </button>
                  <Link
                    to="/"
                    className="w-full bg-black/10 py-2 px-4 md:w-max"
                  >
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
              <PaymentInfo />
            </div>
            <div className="w-full md:w-1/3">
              <ShippingInfo shipping={subTotal} />
            </div>
          </div>
          <Shipping />
        </div>
      )}
    </>
  );
}

export default Cart;
