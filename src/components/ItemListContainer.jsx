import ItemCount from './ItemCount';

function ItemListContainer({ greeting }) {
  return (
    <div className="flex flex-col items-center gap-4 bg-orange-100 p-6">
      <p>{greeting}</p>
      <p>Stock = 5</p>
      <ItemCount stock={5} initial={1} />
      <p>Stock = 0</p>
      <ItemCount stock={0} initial={1} />
    </div>
  );
}

export default ItemListContainer;
