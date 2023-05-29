import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const contextState = {
    cart: cartState,
    addItem: (item) => !cartState.includes(item) && setCartState([...cartState, item]),
    removeItem: (item) => setCartState(cartState.filter((itm) => itm.id !== item.id)),
  };

  return <CartContext.Provider value={contextState}>{children}</CartContext.Provider>;
};

export default CartProvider;
