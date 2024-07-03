import { Card, Skeleton, CardContent } from "@mui/material";
import styles from "./ProductCardSkeleton.module.scss";

export function ProductCardSkeleton() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Skeleton
          className={styles.imgPlaceholder}
          animation="wave"
          variant="rectangular"
        />

        <Skeleton animation="wave" className={styles.textPlaceholder} />
        <Skeleton animation="wave" className={styles.textPlaceholder} />
        <Skeleton animation="wave" className={styles.shorterText} />
      </CardContent>
    </Card>
  );
}

export default ProductCardSkeleton;
