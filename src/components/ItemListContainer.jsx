import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFetch } from '../helpers/getFetch';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getFetch()
        .then((response) =>
          setProducts(
            response.filter((productos) => productos.category === categoryId)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((response) => setProducts(response))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="p-6">
      <ItemList items={products} loading={loading} />
    </div>
  );
}

export default ItemListContainer;
