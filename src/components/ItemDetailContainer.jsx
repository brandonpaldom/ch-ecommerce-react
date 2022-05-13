import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import ItemDetailLoader from './ItemDetailLoader';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProductById(parseInt(itemId)));
      }, 2000);
    });

    fetchProduct.then((response) => {
      setProduct(response);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return <ItemDetailLoader />;
  } else if (product) {
    return <ItemDetail item={product} />;
  }
}

export default ItemDetailContainer;
