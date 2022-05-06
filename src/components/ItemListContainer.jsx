import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
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
          },
          {
            id: 2,
            title: 'Camiseta Básica Slim Fit',
            description:
              'Camiseta confeccionada en algodón con elasticidad. Cuello redondo y manga corta',
            price: 299,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846650/ch-ecommerce/camiseta-basica-slim-fit_fgr1ud.jpg',
            newArticle: true,
          },
          {
            id: 3,
            title: 'Polo Estructura Piqué',
            description:
              'Polo confeccionado en tejido de algodón con estructura piqué. Cuello tira con cierre frontal con botones. Manga corta acabada en rib. Bajo con aberturas laterales.',
            price: 549,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846650/ch-ecommerce/polo-estructura-pique_giefxd.jpg',
            newArticle: true,
          },
          {
            id: 4,
            title: 'Sudadera Básica Capucha',
            description:
              'Sudadera amplia de cuello con capucha ajustable y manga larga. Bolsillos frontal tipo canguro. Acabados en rib.',
            price: 749,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846650/ch-ecommerce/sudadera-basica-capucha_m5qzwp.jpg',
            newArticle: false,
          },
          {
            id: 5,
            title: 'Jeans Básico Slim Fit',
            description:
              'Jeans slim fit con cinco bolsillos. Efecto lavado. Cierre frontal con cremallera y botón metálico.',
            price: 749,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846649/ch-ecommerce/jeans-basico-slim-fit_crbdzh.jpg',
            newArticle: false,
          },
          {
            id: 6,
            title: 'Blazer Conjunto Slim',
            description:
              'Blazer de cuello con solapas de muesca. Manga larga acabada en puño con detalle de botones. Bolsillo de vivo en pecho y de solapa en cadera. Detalle bolsillo interior. Cierre frontal con botones.',
            price: 2299,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846649/ch-ecommerce/blazer-conjunto-slim_xqwnwt.jpg',
            newArticle: false,
          },
          {
            id: 7,
            title: 'Sudadera Polo',
            description:
              'Sudadera con cuello polo y escote pico con manga larga.',
            price: 549,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846649/ch-ecommerce/sudadera-polo_dhlr9e.jpg',
            newArticle: false,
          },
          {
            id: 8,
            title: 'Jeans Wide Leg Rotos',
            description:
              'Jeans de tejido rígido con tiro alto y cinco bolsillos. Pierna ancha extra larga con rotos. Cierre con cremallera y botón metálico.',
            price: 899,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846650/ch-ecommerce/jeans-wide-leg-rotos_vcz2ga.jpg',
            newArticle: false,
          },
          {
            id: 9,
            title: 'Sobrecamisa Fluida',
            description:
              'Sobrecamisa de cuello solapa y manga larga acabada en vuelta con trabilla y botón. Bolsillos delanteros de plastrón con solapa. Cintura ajustable. Cierre frontal con botones.',
            price: 1199,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846649/ch-ecommerce/sobrecamisa-fuida_bt4ruy.jpg',
            newArticle: false,
          },
          {
            id: 10,
            title: 'Pantalón Ancho Masculino',
            description:
              'Pantalón de tiro alto con pinzas. Bolsillos delanteros y falso bolsillo de vivo en espalda. Pernera ancha. Cierre frontal con cremallera y botón.',
            price: 899,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651846649/ch-ecommerce/pantalon-ancho-masculino_y39wky.jpg',
            newArticle: false,
          },
        ]);
      }, 2000);
    });

    promise.then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6">
      <ItemList items={products} loading={loading} />
    </div>
  );
}

export default ItemListContainer;
