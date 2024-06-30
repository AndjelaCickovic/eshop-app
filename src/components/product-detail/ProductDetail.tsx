import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts";
import { useEffect, useMemo } from "react";
import PathConstants from "../../routes/path-constants";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./ProductDetail.module.scss";
import { useTranslation } from "react-i18next";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import QuantityInput from "../quantity-input/QuantityInput";
import ProductDetailTabs from "./product-detail-tabs/ProductDetailTabs";
import {
  Inventory2Outlined,
  InventoryOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import { joinValues } from "../../util/value-formatters.util";

export default function ProductDetail() {
  const { t } = useTranslation();

  const { products } = useProducts();
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return productId ? products.find((p) => p.id === +productId) : undefined;
  }, [productId, products]);

  useEffect(() => {
    if (!product) {
      navigate(PathConstants.Products);
    }
  }, [navigate, product]);

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
            src="https://m.media-amazon.com/images/I/71KtWe8b3JL._AC_SL1500_.jpg"
          />
        </Grid>
        <Grid xs={4} item display={"flex"} flexDirection={"column"} gap={4}>
          <Box gap={1}>
            <Typography variant="h5">{product?.name}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textAlign={"justify"}
            >
              {product?.description}
            </Typography>
          </Box>
          <Typography>
            <LocalizedNumber
              formatStyle="currency"
              value={product?.price}
              className={styles.price}
            />
          </Typography>
          <QuantityInput />
          <Button variant="contained" fullWidth={false}>
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
          additionalInformation={product?.additionalInformation}
          specifications={product?.specifications}
          features={product?.features}
        />
      </Grid>
    </Grid>
  );
}
