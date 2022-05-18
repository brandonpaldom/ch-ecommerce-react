import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFetch } from '../helpers/getFetch';
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

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
