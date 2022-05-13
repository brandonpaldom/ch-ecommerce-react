import { Link } from 'react-router-dom';

function Item({ id, title, price, pictureUrl, newArticle }) {
  return (
    <Link to={`/item/${id}`}>
      <div className="relative">
        <img src={pictureUrl} alt="" className="mb-2 hover:opacity-90" />
        {newArticle && (
          <div className="absolute top-2 left-2 bg-black/10 p-1 text-xs leading-none">
            Nuevo
          </div>
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
