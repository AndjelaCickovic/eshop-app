import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
} from "@mui/material";
import { Product } from "../../types";
import styles from "./ProductCard.module.scss";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LocalizedNumber } from "../localized-number/LocalizedNumber";

interface ProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

export default function ProductCard(props: Readonly<ProductCardProps>) {
  const { product, onClick } = props;

  const { t } = useTranslation();

  const handleClick = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      onClick(product.id);
    },
    [onClick, product.id]
  );
  return (
    // TODO Styling
    <Card
      sx={{ maxWidth: 345 }}
      className={styles["product-card"]}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="194"
        image="https://m.media-amazon.com/images/I/71KtWe8b3JL._AC_SL1500_.jpg"
        alt={props.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          color="text.secondary"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions dir="ltr">
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
          ></LocalizedNumber>
          <IconButton
            aria-label={t("shoppingCart.addBtn")}
            title={t("shoppingCart.addBtn")}
            color="primary"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
