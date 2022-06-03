import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import OrderItem from './OrderItem';
import OrderLoader from './OrderLoader';
import Shipping from './Shipping';

function Order() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = doc(db, 'orders', orderId);

    getDoc(itemCollection)
      .then((resp) => setOrder({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [orderId]);

  const { id, items, total } = order;

  return (
    <div className="mx-auto flex max-w-[1024px] flex-col gap-4 p-6">
      {loading ? (
        <OrderLoader />
      ) : (
        <div className="flex flex-col gap-4 bg-white p-6">
          <h1 className="text-[1.5rem] leading-tight">
            ID de pedido #
            <span to="/order" className="text-amber-600">
              {id}
            </span>
          </h1>
          <p className="text-neutral-500">
            Gracias por su compra. Su pedido ha sido procesado y será enviado lo
            antes posible.
          </p>
          <div className="mt-4">
            {items?.map((item) => (
              <OrderItem key={item.id} {...item} />
            ))}
          </div>
          <div className="flex w-1/3 justify-between self-end">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <Button link path={'/'} primary wmax>
            Seguir comprando
          </Button>
        </div>
      )}
      <Shipping />
    </div>
  );
}

export default Order;
