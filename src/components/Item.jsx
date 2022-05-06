function Item({ id, title, description, price, pictureUrl, newArticle }) {
  return (
    <div className="cursor-pointer">
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
    </div>
  );
}

export default Item;
