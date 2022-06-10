import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import Button from './Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import FormCart from './FormCart';
import Shipping from './Shipping';
import ShippingInfo from './ShippingInfo';

function Cart() {
  const { cartList, removeFromCart, emptyCart, setGetOrderId } =
    useCartContext();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subTotal = cartList
    .map(({ item, quantityToAdd }) => quantityToAdd * item.price)
    .reduce((a, b) => a + b, 0);

  function createOrder() {
    const order = {
      buyer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      items: cartList.map(({ item, color, viewColor, quantityToAdd }) => ({
        id: item.id,
        description: item.description,
        price: item.price,
        title: item.title,
        color: color,
        viewColor: viewColor,
        quantity: quantityToAdd,
      })),
      date: new Date(),
      total: subTotal >= 999 ? subTotal : subTotal + 99,
    };

    const db = getFirestore();
    const q = collection(db, 'orders');
    addDoc(q, order)
      .then((resp) => {
        setGetOrderId(resp.id);
      })
      .catch((err) => console.log(err))
      .finally(() => emptyCart());
  }

  return (
    <>
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4 bg-white p-6 md:w-2/3">
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
              <p className="text-[1.5rem] leading-tight">Mis datos</p>
              <FormCart formData={formData} handleChange={handleChange} />
              <div className="mt-4 flex flex-col justify-end gap-4 text-center md:flex-row">
                <Button onClick={emptyCart} outlined wmax>
                  Vaciar carrito
                </Button>
                <Link to="/">
                  <Button standard wmax>
                    Seguir comprando
                  </Button>
                </Link>
                <Button
                  link
                  onClick={createOrder}
                  path={'/successful'}
                  filled
                  wmax
                  disabled={
                    formData.name === '' ||
                    formData.email === '' ||
                    formData.phone === ''
                  }
                >
                  Comprar ahora
                </Button>
              </div>
            </div>
            <ShippingInfo shipping={subTotal} />
          </div>
          <Shipping />
        </div>
      )}
    </>
  );
}

export default Cart;
