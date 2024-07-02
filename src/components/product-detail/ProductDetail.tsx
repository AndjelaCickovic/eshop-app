import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  Inventory2Outlined,
  ShoppingBagOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import { useCart, useProducts } from "../../contexts";
import PathConstants from "../../routes/path-constants";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import QuantityInput from "../quantity-input/QuantityInput";
import ProductDetailTabs from "./product-detail-tabs/ProductDetailTabs";
import styles from "./ProductDetail.module.scss";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner";

export default function ProductDetail() {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const { t } = useTranslation();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return productId ? products.find((p) => p.id === +productId) : undefined;
  }, [productId, products]);

  useEffect(() => {
    if (!product && !loading) {
      navigate(PathConstants.Products);
    }
  }, [navigate, product, loading]);

  const handleAddToCartClick = useCallback(() => {
    addToCart(product!, productQuantity);
  }, [addToCart, product, productQuantity]);

  const handleQuantityChange = useCallback((value: number) => {
    setProductQuantity(value);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

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
        <Grid xs={12} md={6} container item spacing={4} gap={4}>
          <Stack direction={"column"} gap={4}>
            <Stack spacing={2} direction={"column"}>
              <Typography variant="h5">{product?.name}</Typography>
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
              <QuantityInput
                onChange={handleQuantityChange}
                initialValue={productQuantity}
              />
            </Stack>
            <Button
              variant="contained"
              onClick={handleAddToCartClick}
              disabled={productQuantity === 0}
              startIcon={<ShoppingBagOutlined />}
            >
              {t("shoppingCart.addBtn")}
            </Button>
          </Stack>
          <List
            hidden={
              !product?.additionalInformation["In the Box"] &&
              !product?.additionalInformation.Warranty
            }
            className={styles.fullWidth}
          >
            <Divider />
            {product?.additionalInformation && (
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Inventory2Outlined
                    className={styles.primaryIcon}
                    titleAccess={t("products.inTheBox").concat(":")}
                  />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={t("products.inTheBox").concat(":")}
                  secondary={
                    <ul className={styles.indentedList}>
                      {(
                        product?.additionalInformation["In the Box"] as string[]
                      ).map((value) => (
                        <li key={value}>
                          <Typography variant="body2" component={"div"}>
                            {value}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  }
                  className={styles.bolderText}
                />
              </ListItem>
            )}
            {product?.additionalInformation.Warranty && (
              <ListItem>
                <ListItemIcon>
                  <VerifiedOutlined
                    className={styles.primaryIcon}
                    titleAccess={t("products.warranty")}
                  />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={product?.additionalInformation.Warranty}
                  className={styles.bolderText}
                />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>

      <ProductDetailTabs
        specifications={product?.specifications}
        features={product?.features}
      />
    </Grid>
  );
}
