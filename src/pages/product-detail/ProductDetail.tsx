import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { PathConstants } from "../../routes/path-constants";
import { LocalizedNumber } from "../../components/localized-number/LocalizedNumber";
import ProductDetailTabs from "../../components/product-detail-tabs/ProductDetailTabs";
import { LoadingSpinner } from "../../components/loading-spinner/LoadingSpinner";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";
import { useProducts } from "../../contexts";
import ProductDetailAdditionalInformation from "../../components/product-detail-additional-information/ProductDetailAdditionalInformation";
import styles from "./ProductDetail.module.scss";

export function ProductDetail() {
  const { products, loading } = useProducts();
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products?.length > 0 && productId
      ? products.find((p) => p.id === +productId)
      : undefined;
  }, [productId, products]);

  useEffect(() => {
    if (!product && !loading) {
      navigate(PathConstants.Products);
    }
  }, [navigate, product, loading]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) return <></>;
  return (
    <Grid
      container
      item
      xs={12}
      lg={10}
      direction={"column"}
      spacing={4}
      className={styles.wrapper}
    >
      <Grid container item xs={12} spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent={"center"}
          alignItems={"center"}
          className={styles.imgContainer}
        >
          <img
            alt="Product"
            className={styles.productImg}
            src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
          />
        </Grid>
        <Grid xs={12} md={6} container item spacing={4} gap={2}>
          <Stack direction={"column"} gap={4}>
            <Stack spacing={2} direction={"column"}>
              <Typography variant="h4">{product?.name}</Typography>
              <Typography variant="subtitle1" textAlign={"justify"}>
                {product?.description}
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <LocalizedNumber
                formatStyle="currency"
                value={product?.price}
                className={styles.price}
              />
              <AddToCartButton productId={product.id} />
            </Stack>
          </Stack>
          {product?.additionalInformation && (
            <>
              <Divider />
              <ProductDetailAdditionalInformation
                additionalInformation={product.additionalInformation}
              />
            </>
          )}
        </Grid>
      </Grid>

      <ProductDetailTabs
        specifications={product?.specifications}
        features={product?.features}
      />
    </Grid>
  );
}

export default ProductDetail;
