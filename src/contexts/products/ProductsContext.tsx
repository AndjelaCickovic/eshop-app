import { createContext, useContext } from "react";
import { Product } from "../../types";

export interface IProductsContext {
  products: Product[];
  loading: boolean;
  error?: string;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  loading: false,
});

export function useProducts() {
  return useContext(ProductsContext);
}
