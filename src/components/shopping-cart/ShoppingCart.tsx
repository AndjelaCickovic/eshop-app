import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useCartDrawer } from "../../contexts/shopping-cart/ShoppingCartDrawerContext";
import { useCart } from "../../contexts/shopping-cart/ShoppingCartContext";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import { ShoppingCartItem } from "./shopping-cart-item/ShoppingCartItem";
import { useProducts } from "../../contexts/products/ProductsContext";
import styles from "./ShoppingCart.module.scss";

export function ShoppingCart() {
  const { isCartOpen, closeCart } = useCartDrawer();
  const { cartItems } = useCart();
  const { products } = useProducts();
  const { t } = useTranslation();

  const subtotal: number = useMemo(() => {
    return cartItems.reduce((total, cartItem) => {
      const item = products.find((p) => p.id === cartItem.id);
      return total + (item?.price ?? 0) * cartItem.quantity;
    }, 0);
  }, [cartItems, products]);

  return (
    <Drawer open={isCartOpen} anchor="right" onClose={closeCart}>
      <Stack
        direction="column"
        display={"flex"}
        gap={2}
        className={styles.container}
      >
        <Box>
          <Stack display={"flex"} direction={"row"} alignItems={"center"}>
            <Typography variant="h6" className={styles.title}>
              {t("shoppingCart.title")}
            </Typography>
            <IconButton onClick={closeCart}>
              <CloseOutlined />
            </IconButton>
          </Stack>
          <Divider className={styles.divider} />
        </Box>
        <Box className={styles.itemsContainer}>
          {cartItems.length > 0 && (
            <>
              {cartItems.map((item) => (
                <ShoppingCartItem item={item} key={item.id}></ShoppingCartItem>
              ))}
              <Stack direction={"row"} gap={1}>
                <Typography>
                  {t("shoppingCart.totalLabel").concat(":")}
                </Typography>
                <LocalizedNumber value={subtotal} formatStyle="currency" />
              </Stack>
            </>
          )}
          {cartItems.length === 0 && (
            <Box
              className={styles.fullHeight}
              alignContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography>{t("shoppingCart.emptyCartText")}</Typography>
              <ShoppingBagOutlinedIcon className={styles.cartIcon} />
            </Box>
          )}
        </Box>
      </Stack>
    </Drawer>
  );
}
