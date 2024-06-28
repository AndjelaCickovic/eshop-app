import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import productService from "../../services/product.service";
import { Product } from "../../types";

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

  return (
    <Grid
      container
      rowSpacing={3}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"auto"}
    >
      {products.map((product) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
