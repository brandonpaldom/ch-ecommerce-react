import { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList')) || []
  )

  const [almostOutOfStock, setAlmostOutOfStock] = useState(false)
  const [overstock, setOverstock] = useState(false)
  const [getOrderId, setGetOrderId] = useState(null)

  const addToCart = (product) => {
    const isInCart = cartList.find((item) => item.item.id === product.item.id)
    const colorExist = cartList.find((item) => item.color === product.color)

    if (isInCart) {
      if (colorExist) {
        const newCartList = cartList.map((cartItem) => {
          if (
            cartItem.item.id === product.item.id &&
            cartItem.color === product.color
          ) {
            if (cartItem.quantityToAdd === product.item.stock) {
              setOverstock(true)
            } else if (
              cartItem.quantityToAdd + product.quantityToAdd >
              product.item.stock
            ) {
              setAlmostOutOfStock(true)
            } else {
              cartItem.quantityToAdd += product.quantityToAdd
              setAlmostOutOfStock(false)
            }
          }

          return cartItem
        })

        setCartList(newCartList)
        localStorage.setItem('cartList', JSON.stringify(newCartList))
      } else {
        const newCartList = [...cartList, product]
        setCartList(newCartList)
        localStorage.setItem('cartList', JSON.stringify(newCartList))
        setAlmostOutOfStock(false)
      }
    } else {
      const newCartList = [...cartList, product]
      setCartList(newCartList)
      localStorage.setItem('cartList', JSON.stringify(newCartList))
      setAlmostOutOfStock(false)
    }
  }

  const removeFromCart = (index) => {
    const newCartList = [...cartList]

    newCartList.splice(index, 1)
    setCartList(newCartList)
    localStorage.setItem('cartList', JSON.stringify(newCartList))
    setOverstock(false)
  }

  const emptyCart = () => {
    setCartList([])
    localStorage.setItem('cartList', JSON.stringify([]))
    setOverstock(false)
  }

  const cartContextValues = {
    cartList,
    almostOutOfStock,
    setAlmostOutOfStock,
    overstock,
    setOverstock,
    addToCart,
    removeFromCart,
    emptyCart,
    getOrderId,
    setGetOrderId,
  }

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
