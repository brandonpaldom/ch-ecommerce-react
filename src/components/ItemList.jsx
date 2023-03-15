import Item from './Item'
import ItemListLoader from './ItemListLoader'

function ItemList({ items, loading }) {
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {loading
        ? loaders.map((loader) => <ItemListLoader key={loader} />)
        : items.map((item) => <Item key={item.id} {...item} />)}
    </div>
  )
}

export default ItemList
