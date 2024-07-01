import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  CardActionArea,
} from "@mui/material";
import { Product } from "../../types";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import { useCart } from "../../contexts";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

export default function ProductCard(props: Readonly<ProductCardProps>) {
  const { product, onClick } = props;

  const { t } = useTranslation();
  const { addToCart } = useCart();

  const handleCardClick = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      onClick(product.id);
    },
    [onClick, product.id]
  );

  const handleAddToCartClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      addToCart(product);
    },
    [addToCart, product]
  );

  return (
    <Card className={styles.productCard} onClick={handleCardClick}>
      <CardActionArea disableTouchRipple>
        <CardMedia
          component="img"
          className={styles.img}
          image="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
          alt={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack
            display={"flex"}
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <LocalizedNumber
              formatStyle="currency"
              value={product?.price}
              className={styles.price}
            ></LocalizedNumber>
            <IconButton
              aria-label={t("shoppingCart.addBtn")}
              title={t("shoppingCart.addBtn")}
              color="primary"
              onClick={handleAddToCartClick}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
