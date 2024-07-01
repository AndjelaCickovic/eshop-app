import { createContext, useContext } from "react";

interface ICartDrawerContext {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartDrawer = () =>
  useContext<ICartDrawerContext>(CartDrawerContext);

const CartDrawerContext = createContext<ICartDrawerContext>({
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export default CartDrawerContext;
