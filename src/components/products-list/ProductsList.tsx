import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductCard from "../../components/product-card/ProductCard";
import { useProducts } from "../../contexts";
import PathConstants from "../../routes/path-constants";

export default function ProductsList() {
  const { products } = useProducts();

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
      rowSpacing={3}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"auto"}
    >
      {products.map((product) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
          <ProductCard product={product} onClick={handleClick} />
        </Grid>
      ))}
    </Grid>
  );
}
