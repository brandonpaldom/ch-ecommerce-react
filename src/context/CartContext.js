import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList')) || []
  );
  const [almostOutOfStock, setAlmostOutOfStock] = useState(false);
  const [overstock, setOverstock] = useState(false);

  const addToCart = (product) => {
    const isInCart = cartList.find(
      (cartItem) => cartItem.item.id === product.item.id
    );

    if (isInCart) {
      const newCartList = cartList.map((cartItem) => {
        if (cartItem.item.id === product.item.id) {
          if (cartItem.quantityToAdd === product.item.stock) {
            setOverstock(true);
          } else if (
            cartItem.quantityToAdd + product.quantityToAdd >
            product.item.stock
          ) {
            setAlmostOutOfStock(true);
          } else {
            cartItem.quantityToAdd += product.quantityToAdd;
            setAlmostOutOfStock(false);
          }
        }
        return cartItem;
      });

      setCartList(newCartList);
      localStorage.setItem('cartList', JSON.stringify(newCartList));
    } else {
      const newCartList = [...cartList, product];

      setCartList(newCartList);
      localStorage.setItem('cartList', JSON.stringify(newCartList));
      setAlmostOutOfStock(false);
    }
  };

  const removeFromCart = (index) => {
    const newCartList = [...cartList];

    newCartList.splice(index, 1);
    setCartList(newCartList);
    localStorage.setItem('cartList', JSON.stringify(newCartList));
    setOverstock(false);
  };

  const emptyCart = () => {
    setCartList([]);
    localStorage.setItem('cartList', JSON.stringify([]));
    setOverstock(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        almostOutOfStock,
        setAlmostOutOfStock,
        overstock,
        setOverstock,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
