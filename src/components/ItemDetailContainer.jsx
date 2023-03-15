import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemDetailLoader from './ItemDetailLoader'

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = doc(db, 'items', itemId)

    getDoc(itemCollection)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [itemId])

  return <>{loading ? <ItemDetailLoader /> : <ItemDetail item={product} />}</>
}

export default ItemDetailContainer
