import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import ItemDetailLoader from './ItemDetailLoader';
import { useParams } from 'react-router-dom';
import { getFetch } from '../helpers/getFetch';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getFetch(parseInt(itemId))
      .then((response) => setProduct(response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });

  return <>{loading ? <ItemDetailLoader /> : <ItemDetail item={product} />}</>;
}

export default ItemDetailContainer;
