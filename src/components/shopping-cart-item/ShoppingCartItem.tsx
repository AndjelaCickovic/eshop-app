import { MouseEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../../types";
import { useCart } from "../../contexts";
import QuantityInput from "../quantity-input/QuantityInput";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import styles from "./ShoppingCartItem.module.scss";

interface IShoppingCartItemProps {
  item: CartItem;
}

export function ShoppingCartItem(props: Readonly<IShoppingCartItemProps>) {
  const { item } = props;

  const { t } = useTranslation();
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = useCallback(
    (value: number) => {
      updateCartItemQuantity(item.product.id, value);
    },
    [item.product.id, updateCartItemQuantity]
  );

  const handleDeleteClick = useCallback(
    (_e: MouseEvent<HTMLButtonElement>) => {
      removeFromCart(item.product.id);
    },
    [item.product.id, removeFromCart]
  );

  return (
    <Stack
      flexDirection="row"
      alignItems={"center"}
      gap={2}
      className={styles.container}
    >
      <Avatar
        variant="square"
        className={styles.avatar}
        src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
      />
      <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
        <Typography>{item.product.name}</Typography>
        <LocalizedNumber value={item.product.price} formatStyle="currency" />
      </Box>
      <QuantityInput
        initialValue={item.quantity}
        onChange={handleQuantityChange}
      />
      <IconButton
        edge="end"
        onClick={handleDeleteClick}
        title={t("shoppingCart.removeBtn", { count: item.quantity })}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
