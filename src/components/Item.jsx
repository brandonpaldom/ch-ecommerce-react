import { Link } from 'react-router-dom';

function Item({ id, title, price, newArticle, variations }) {
  const { img } = variations[0];

  return (
    <Link to={`/item/${id}`}>
      <div className="relative">
        {img && <img src={img} alt="" className="mb-2 hover:opacity-90" />}
        {newArticle && (
          <span className="absolute top-2 left-2 bg-black/10 p-1 text-xs leading-none">
            Nuevo
          </span>
        )}
      </div>
      <div className="truncate text-xs text-neutral-500 sm:text-sm">
        {title}
      </div>
      <div>${price}</div>
    </Link>
  );
}

export default Item;
