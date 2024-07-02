import { useState, useEffect, useMemo } from "react";
import productService from "../../services/product.service";
import { Product } from "../../types";
import { IProductsContext, ProductsContext } from "..";

export default function ProductsProvider(
  props: Readonly<React.PropsWithChildren>
) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isBackendApiCall = true;
    setLoading(true);

    const timeoutId = setTimeout(() => {
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
    }, 10000);

    // Cleanup function to clear the timeout if the component unmounts

    return () => clearTimeout(timeoutId);
  }, []);

  const productsValue: IProductsContext = useMemo(() => {
    return { products, loading };
  }, [products, loading]);

  return (
    <ProductsContext.Provider value={productsValue}>
      {props.children}
    </ProductsContext.Provider>
  );
}
