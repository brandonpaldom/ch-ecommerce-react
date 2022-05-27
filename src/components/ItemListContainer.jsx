import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from 'firebase/firestore';
import ItemList from './ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    if (categoryId) {
      const q = query(
        collection(db, 'items'),
        where('category', '==', categoryId)
      );

      getDocs(q)
        .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const itemsCollection = collection(db, 'items');

      getDocs(itemsCollection)
        .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="p-6">
      <ItemList items={products} loading={loading} />
      {products.length === 0 && (
        <div className="grid h-[320px] w-full grid-cols-1 place-content-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-neutral-500">
              Lo sentimos, no hay productos en esta categoría en este momento.
              Por favor, vuelva a comprobarlo pronto.
            </p>
            <Link to="/" className="w-max bg-black/10 p-2">
              Regresar al inicio
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
