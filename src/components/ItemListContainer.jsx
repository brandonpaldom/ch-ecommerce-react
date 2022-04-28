function ItemListContainer({ greeting }) {
  return (
    <div className="flex items-center justify-center bg-orange-100 p-6">
      <h1>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;
