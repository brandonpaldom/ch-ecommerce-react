import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList')) || []
  );
  const [itemExists, setItemExists] = useState(false);
  const [overstock, setOverstock] = useState(false);

  const addToCart = (item) => {
    const itemExists = cartList.find(
      (cartItem) => cartItem.color === item.color
    );
    const quantityTotal = cartList.reduce((a, b) => a + b.quantityToAdd, 0);
    if (!itemExists) {
      const newCartList = [...cartList, item];
      setCartList(newCartList);
      localStorage.setItem('cartList', JSON.stringify(newCartList));
    } else {
      const newCartList = cartList.map((cartItem) => {
        if (cartItem.color === item.color) {
          if (
            quantityTotal < 5 &&
            item.quantityToAdd <= item.item.stock - quantityTotal
          ) {
            cartItem.quantityToAdd += 1;
          } else if (item.quantityToAdd + quantityTotal > item.item.stock) {
            setOverstock(true);
          } else {
            setOverstock(true);
          }
        }
        return cartItem;
      });
      setCartList(newCartList);
      localStorage.setItem('cartList', JSON.stringify(newCartList));
    }
  };

  const removeFromCart = (index) => {
    const newCartList = [...cartList];
    newCartList.splice(index, 1);
    setCartList(newCartList);
    localStorage.setItem('cartList', JSON.stringify(newCartList));
    setItemExists(false);
    setOverstock(false);
  };

  const emptyCart = () => {
    setCartList([]);
    localStorage.setItem('cartList', JSON.stringify([]));
    setItemExists(false);
    setOverstock(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        emptyCart,
        itemExists,
        overstock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
