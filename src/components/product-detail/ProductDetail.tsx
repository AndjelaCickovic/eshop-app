import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
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
import { useTranslation } from "react-i18next";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import QuantityInput from "../quantity-input/QuantityInput";
import ProductDetailTabs from "./product-detail-tabs/ProductDetailTabs";
import { joinValues } from "../../util/value-formatters.util";
import styles from "./ProductDetail.module.scss";

export default function ProductDetail() {
  const { t } = useTranslation();

  const { products } = useProducts();
  const { addToCart } = useCart();
  const { productId } = useParams();
  const navigate = useNavigate();

  const [productQuantity, setProductQuantity] = useState<number>(1);

  const product = useMemo(() => {
    return productId ? products.find((p) => p.id === +productId) : undefined;
  }, [productId, products]);

  useEffect(() => {
    if (!product) {
      navigate(PathConstants.Products);
    }
  }, [navigate, product]);

  const handleAddToCartClick = useCallback(() => {
    addToCart(product!, productQuantity);
  }, [addToCart, product, productQuantity]);

  const handleQuantityChange = useCallback((value: number) => {
    setProductQuantity(value);
  }, []);

  return (
    <Grid
      item
      xs={12}
      lg={8}
      container
      flexDirection={"column"}
      display={"flex"}
      gap={4}
      className={styles.wrapper}
    >
      <Grid xs={12} item display={"flex"} flexDirection={"row"} gap={6}>
        <Grid
          item
          xs={6}
          display={"flex"}
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
        <Grid xs={4} item display={"flex"} flexDirection={"column"} gap={4}>
          <Box gap={1}>
            <Typography variant="h5">{product?.name}</Typography>
            <Typography variant="subtitle1" textAlign={"justify"}>
              {product?.description}
            </Typography>
          </Box>
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

          <List
            hidden={
              !product?.additionalInformation["In the Box"] &&
              !product?.additionalInformation.Warranty
            }
            sx={{ border: 1, borderColor: "divider", borderRadius: "15px" }}
          >
            {product?.additionalInformation.Warranty && (
              <ListItem>
                <ListItemIcon>
                  <VerifiedOutlined
                    className={styles.primaryIcon}
                    titleAccess={t("products.warranty")}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={product?.additionalInformation.Warranty}
                  className={styles.bolderText}
                />
              </ListItem>
            )}
            {product?.additionalInformation && (
              <>
                <Divider />
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Inventory2Outlined
                      className={styles.primaryIcon}
                      titleAccess={t("products.inTheBox")}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={t("products.inTheBox").concat(
                      ": ",
                      joinValues(product?.additionalInformation["In the Box"])
                    )}
                    className={styles.bolderText}
                  />
                </ListItem>
              </>
            )}
          </List>
        </Grid>
      </Grid>
      <Grid xs={12} item display={"flex"}>
        <ProductDetailTabs
          specifications={product?.specifications}
          features={product?.features}
        />
      </Grid>
    </Grid>
  );
}
