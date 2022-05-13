import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../data';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProducts(categoryId));
      }, 2000);
    });

    fetchProducts.then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="p-6">
      <ItemList items={products} loading={loading} />
    </div>
  );
}

export default ItemListContainer;
