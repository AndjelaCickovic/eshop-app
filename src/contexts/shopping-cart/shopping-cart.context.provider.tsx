import React, { useCallback, useEffect, useMemo, useState } from "react";
import ShoppingCartContext, {
  IShoppingCartContext,
} from "./shopping-cart.context";
import { CartItem, Product } from "../../types";
import CartDrawerContext from "./shopping-cart-drawer.context";
import shoppingCartService from "../../services/shopping-cart.service";

export function ShoppingCartProvider(props: Readonly<React.PropsWithChildren>) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClearCartRequested, setIsClearCartRequested] = useState(false);

  const itemsTotalCount = useMemo(() => {
    return cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  }, [cartItems]);

  useEffect(() => {
    setCartItems(shoppingCartService.getItems());
  }, []);

  useEffect(() => {
    shoppingCartService.updateCart(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product, quantity?: number) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + (quantity ?? 1) }
            : item
        );
      } else {
        return [...prevCartItems, { product, quantity: quantity ?? 1 }];
      }
    });
  };

  const removeFromCart = useCallback(
    (productId: number) => {
      setCartItems(cartItems.filter((item) => item.product.id !== productId));
    },
    [cartItems]
  );

  const updateCartItemQuantity = useCallback(
    (productId: number, quantity: number) => {
      const existingCartItemIndex = cartItems.findIndex(
        (item) => item.product.id === productId
      );

      if (existingCartItemIndex >= 0) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex].quantity = quantity;
        setCartItems(updatedCartItems);
      }
    },
    [cartItems]
  );

  const clearCart = useCallback(() => {
    setIsClearCartRequested(true);
  }, []);

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
      </CartDrawerContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
