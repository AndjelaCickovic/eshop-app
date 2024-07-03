import { useCallback } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  CardActionArea,
} from "@mui/material";
import { AddToCartButton } from "../add-to-cart-button/AddToCartButton";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";
import { Product } from "../../types";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

export function ProductCard(props: Readonly<ProductCardProps>) {
  const { product, onClick } = props;

  const handleCardClick = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      onClick(product.id);
    },
    [onClick, product.id]
  );

  return (
    <Card className={styles.productCard} onClick={handleCardClick}>
      <CardActionArea disableTouchRipple className={styles.actionArea}>
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
          <Typography variant="subtitle1" className={styles.clampedText}>
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
              value={product.price}
              className={styles.price}
            ></LocalizedNumber>
            <AddToCartButton productId={product.id}></AddToCartButton>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
