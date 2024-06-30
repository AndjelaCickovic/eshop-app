import { useState, useEffect, useMemo } from "react";
import productService from "../../services/product.service";
import { Product } from "../../types";
import { IProductsContext, ProductsContext } from "../../contexts";
import { Outlet } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isBackendApiCall = true;
    setLoading(true);
    productService
      .getProducts()
      .then((data) => {
        if (isBackendApiCall) {
          setProducts(data);
          setLoading(false);
          isBackendApiCall = false;
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        isBackendApiCall = false;
      });
  }, []);

  const productsValue: IProductsContext = useMemo(() => {
    return { products };
  }, [products]);

  return (
    <ProductsContext.Provider value={productsValue}>
      <Outlet />
    </ProductsContext.Provider>
  );
}
