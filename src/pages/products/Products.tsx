import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { ProductCardSkeleton } from "../../components/product-card/product-card-skeleton/ProductCardSkeleton";
import { useProducts } from "../../contexts/products/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import PathConstants from "../../routes/path-constants";
import styles from "./Products.module.scss";

export default function Products() {
  const { products, loading } = useProducts();

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      navigate(
        PathConstants.ProductDetails.replace(":productId", id.toString())
      );
    },
    [navigate]
  );

  return (
    <Grid
      container
      spacing={4}
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems={"center"}
      className={styles.grid}
    >
      {!loading
        ? products.map((product) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
              <ProductCard product={product} onClick={handleClick} />
            </Grid>
          ))
        : [1, 2, 3, 4, 5, 6].map((v) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={v}>
              <ProductCardSkeleton />
            </Grid>
          ))}
    </Grid>
  );
}
