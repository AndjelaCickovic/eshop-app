import { useCallback } from "react";
import { Button } from "@mui/material";
import { t } from "i18next";
import { useCart } from "../../contexts";
import QuantityInput from "../quantity-input/QuantityInput";

interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton(props: Readonly<AddToCartButtonProps>) {
  const { productId } = props;

  const { cartItems, addToCart, updateCartItemQuantity, removeFromCart } =
    useCart();

  const productInCart = cartItems.find((i) => i.id === productId);

  const handleAddToCartClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      addToCart(productId, 1);
    },
    [addToCart, productId]
  );

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent | React.MouseEvent, value: number) => {
      e.stopPropagation();
      value === 0
        ? removeFromCart(productId)
        : updateCartItemQuantity(productId, value);
    },
    [productId, removeFromCart, updateCartItemQuantity]
  );

  return productInCart ? (
    <QuantityInput
      initialValue={productInCart.quantity}
      onChange={handleQuantityChange}
      min={0}
    ></QuantityInput>
  ) : (
    <Button variant="contained" onClick={handleAddToCartClick}>
      {t("shoppingCart.addBtn")}
    </Button>
  );
}

export default AddToCartButton;
