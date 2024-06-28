import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Product } from "../../types";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: Readonly<ProductCardProps>) {
  const { product } = props;
  return (
    // TODO Styling
    <Card sx={{ maxWidth: 345 }} className={styles["product-card"]}>
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
      <CardActions disableSpacing dir="rtl">
        {/* TODO Translations */}
        <IconButton
          aria-label="Add to cart"
          title="Add to cart"
          color="primary"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
