import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../../../types";
import { LocalizedNumber } from "../../localized-number/LocalizedNumber";
import { useProducts, useCart, useConfirmationDialog } from "../../../contexts";
import QuantityInput from "../../quantity-input/QuantityInput";
import styles from "./ShoppingCartItem.module.scss";

interface IShoppingCartItemProps {
  item: CartItem;
}

export function ShoppingCartItem(props: Readonly<IShoppingCartItemProps>) {
  const { item } = props;

  const { products } = useProducts();
  const { t } = useTranslation();
  const { removeFromCart, updateCartItemQuantity } = useCart();
  const { confirm } = useConfirmationDialog();

  const product = products.find((p) => p.id === item.id);

  if (!product) return <></>;

  const handleQuantityChange = (
    _e: React.ChangeEvent | React.MouseEvent,
    value: number
  ) => {
    updateCartItemQuantity(product.id, value);
  };

  const handleDeleteClick = (_e: MouseEvent<HTMLButtonElement>) => {
    confirm(t("shoppingCart.removeItemConfirmationMessage"), () => {
      removeFromCart(product.id);
    });
  };

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
        <Typography>{product?.name}</Typography>
        <LocalizedNumber value={product?.price} formatStyle="currency" />
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
