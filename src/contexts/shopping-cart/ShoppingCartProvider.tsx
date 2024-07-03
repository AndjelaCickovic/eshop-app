import React, { useCallback, useMemo, useState } from "react";
import ShoppingCartContext, {
  IShoppingCartContext,
} from "./ShoppingCartContext";
import { CartItem } from "../../types";
import CartDrawerContext from "./ShoppingCartDrawerContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ShoppingCart } from "../../components/shopping-cart/ShoppingCart";

export function ShoppingCartProvider(props: Readonly<React.PropsWithChildren>) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemsTotalCount = useMemo(() => {
    return cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  }, [cartItems]);

  const addToCart = useCallback(
    (id: number, quantity?: number) => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find((item) => item.id === id);

        if (existingItem) {
          return prevCartItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + (quantity ?? 1) }
              : item
          );
        } else {
          return [...prevCartItems, { id, quantity: quantity ?? 1 }];
        }
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    },
    [cartItems, setCartItems]
  );

  const updateCartItemQuantity = useCallback(
    (productId: number, quantity: number) => {
      const existingCartItemIndex = cartItems.findIndex(
        (item) => item.id === productId
      );

      if (existingCartItemIndex >= 0) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex].quantity = quantity;
        setCartItems(updatedCartItems);
      }
    },
    [cartItems, setCartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const cartDrawerContextValue = useMemo(() => {
    return {
      isCartOpen,
      openCart,
      closeCart,
    };
  }, [closeCart, isCartOpen, openCart]);

  const shoppingCartContextValue: IShoppingCartContext = useMemo(() => {
    return {
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      itemsTotalCount: itemsTotalCount,
    };
  }, [
    addToCart,
    cartItems,
    clearCart,
    itemsTotalCount,
    removeFromCart,
    updateCartItemQuantity,
  ]);

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValue}>
      <CartDrawerContext.Provider value={cartDrawerContextValue}>
        {props.children}
        <ShoppingCart />
      </CartDrawerContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
