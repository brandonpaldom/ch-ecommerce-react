import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import NotProducts from './NotProducts';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const q = collection(db, 'items');

    const qFilter = categoryId
      ? query(q, where('category', '==', categoryId))
      : q;

    getDocs(qFilter)
      .then((resp) => {
        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="p-6">
      <ItemList items={products} loading={loading} />
      {products.length === 0 && <NotProducts />}
    </div>
  );
}

export default ItemListContainer;
