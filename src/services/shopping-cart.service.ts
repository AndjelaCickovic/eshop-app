import { CartItem } from "../types";

const storageKey = "EShopShoppingCart";

const shoppingCartService = {
  getItems(): CartItem[] {
    const storedCartItems = localStorage.getItem(storageKey);
    let result: CartItem[] = [];
    if (storedCartItems) {
      result = JSON.parse(storedCartItems);
    }
    return result;
  },

  updateCart(items: CartItem[]) {
    localStorage.setItem(storageKey, JSON.stringify(items));
  },
};

export default shoppingCartService;
