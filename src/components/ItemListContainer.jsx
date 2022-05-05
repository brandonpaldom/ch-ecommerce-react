import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'CAMISA ESTRUCTURA EASY CARE',
            description:
              'Camisa slim fit de cuello italiano y manga larga acabada en puño con botón. Cierre frontal de botonadura.',
            price: 699,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651790328/ch-ecommerce/camisa-estructura-easy-care_eunjgp.jpg',
            newArticle: true,
          },
          {
            id: 2,
            title: 'CAMISETA BÁSICA SLIM FIT',
            description:
              'Camiseta confeccionada en algodón con elasticidad. Cuello redondo y manga corta',
            price: 299,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651790494/ch-ecommerce/camiseta-basica-slim-fit_x6jm5v.jpg',
            newArticle: true,
          },
          {
            id: 3,
            title: 'POLO ESTRUCTURA PIQUÉ',
            description:
              'Polo confeccionado en tejido de algodón con estructura piqué. Cuello tira con cierre frontal con botones. Manga corta acabada en rib. Bajo con aberturas laterales.',
            price: 549,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651790808/ch-ecommerce/polo-estructura-pique_re9dye.jpg',
            newArticle: true,
          },
          {
            id: 4,
            title: 'SUDADERA BÁSICA CAPUCHA',
            description:
              'Sudadera amplia de cuello con capucha ajustable y manga larga. Bolsillos frontal tipo canguro. Acabados en rib.',
            price: 749,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651790812/ch-ecommerce/sudadera-basica-capucha_ppdaai.jpg',
            newArticle: false,
          },
          {
            id: 5,
            title: 'JEANS BÁSICO SLIM FIT',
            description:
              'Jeans slim fit con cinco bolsillos. Efecto lavado. Cierre frontal con cremallera y botón metálico.',
            price: 749,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651790986/ch-ecommerce/jeans-basico-slim-fit_sidhw3.jpg',
            newArticle: false,
          },
          {
            id: 6,
            title: 'BLAZER CONJUNTO SLIM',
            description:
              'Blazer de cuello con solapas de muesca. Manga larga acabada en puño con detalle de botones. Bolsillo de vivo en pecho y de solapa en cadera. Detalle bolsillo interior. Cierre frontal con botones.',
            price: 2299,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651791256/ch-ecommerce/blazer-conjunto-slim_g947c5.jpg ',
            newArticle: false,
          },
          {
            id: 7,
            title: 'SUDADERA POLO',
            description:
              'Sudadera con cuello polo y escote pico con manga larga.',
            price: 549,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651791816/ch-ecommerce/sudadera-polo_crd0ul.jpg',
            newArticle: false,
          },
          {
            id: 8,
            title: 'JEANS WIDE LEG ROTOS',
            description:
              'Jeans de tejido rígido con tiro alto y cinco bolsillos. Pierna ancha extra larga con rotos. Cierre con cremallera y botón metálico.',
            price: 899,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651791820/ch-ecommerce/jeans-wide-leg-rotos_jnevg0.jpg',
            newArticle: false,
          },
          {
            id: 9,
            title: 'SOBRECAMISA FLUIDA',
            description:
              'Sobrecamisa de cuello solapa y manga larga acabada en vuelta con trabilla y botón. Bolsillos delanteros de plastrón con solapa. Cintura ajustable. Cierre frontal con botones.',
            price: 1199,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651792005/ch-ecommerce/sobrecamisa-fuida_pplnmd.jpg',
            newArticle: false,
          },
          {
            id: 10,
            title: 'PANTALÓN ANCHO MASCULINO',
            description:
              'Pantalón de tiro alto con pinzas. Bolsillos delanteros y falso bolsillo de vivo en espalda. Pernera ancha. Cierre frontal con cremallera y botón.',
            price: 899,
            pictureUrl:
              'https://res.cloudinary.com/dlomynswh/image/upload/v1651792101/ch-ecommerce/pantalon-ancho-masculino_jekbhf.jpg',
            newArticle: false,
          },
        ]);
      }, 2000);
    });

    promise.then((response) => {
      setResponse(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6">
      <ItemList items={response} loading={loading} />
    </div>
  );
}

export default ItemListContainer;
