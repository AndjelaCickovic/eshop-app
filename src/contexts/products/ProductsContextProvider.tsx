import { useState, useEffect, useMemo, useRef } from "react";
import productService from "../../services/product.service";
import { Product } from "../../types";
import { IProductsContext, ProductsContext } from "../products/ProductsContext";
import { toast } from "react-toastify";
import { IErrorResponse } from "../../services/http.service";

export function ProductsProvider(props: Readonly<React.PropsWithChildren>) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setLoading(true);

      productService
        .getProducts()
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error: IErrorResponse) => {
          toast.error(error.message);
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  const productsValue: IProductsContext = useMemo(() => {
    return { products, loading, error };
  }, [products, loading, error]);

  return (
    <ProductsContext.Provider value={productsValue}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
