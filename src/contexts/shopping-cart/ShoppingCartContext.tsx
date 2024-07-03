import { createContext, useContext } from "react";
import { CartItem } from "../../types";

export interface IShoppingCartContext {
  cartItems: CartItem[];
  itemsTotalCount: number;
  addToCart: (id: number, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<IShoppingCartContext>({
  cartItems: [],
  itemsTotalCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContext;
