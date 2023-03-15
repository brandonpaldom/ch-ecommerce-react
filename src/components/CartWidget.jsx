import { useContext } from 'react'
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg'
import CartContext from '../context/CartContext'

function CartWidget() {
  const { cartList } = useContext(CartContext)

  const products = cartList
    .map(({ quantityToAdd }) => quantityToAdd)
    .reduce((a, b) => a + b, 0)

  return (
    <div className="flex items-center gap-2">
      <img src={ShoppingCartIcon} alt="" width={24} />
      {products !== 0 && <span>{products}</span>}
    </div>
  )
}

export default CartWidget
