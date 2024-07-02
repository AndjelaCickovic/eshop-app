import { createContext, useContext } from "react";
import { CartItem, Product } from "../../types";

export interface IShoppingCartContext {
  cartItems: CartItem[];
  itemsTotalCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
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
