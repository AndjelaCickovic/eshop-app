import { createContext, useContext } from "react";
import { Product } from "../../types";

export interface IProductsContext {
  products: Product[];
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
});

export function useProducts() {
  return useContext(ProductsContext);
}
