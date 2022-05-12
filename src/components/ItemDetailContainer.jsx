import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import ItemDetailLoader from './ItemDetailLoader';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              title: 'Camisa Estructura Easy Care',
              description:
                'Camisa slim fit de cuello italiano y manga larga acabada en puño con botón. Cierre frontal de botonadura.',
              price: 699,
              pictureUrl:
                'https://res.cloudinary.com/dlomynswh/image/upload/v1651846650/ch-ecommerce/camisa-estructura-easy-care_gmpysm.jpg',
              newArticle: true,
              stock: 5,
            },
          ]);
        }, 2000);
      });

      setProduct(response);
      setLoading(false);
    };

    getProduct();
  }, []);

  if (loading) {
    return <ItemDetailLoader />;
  } else {
    return <ItemDetail item={product} />;
  }
}

export default ItemDetailContainer;
