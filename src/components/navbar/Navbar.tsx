import { useTranslation } from "react-i18next";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import PathConstants from "../../routes/path-constants";
import { useProducts } from "../../contexts/products/ProductsContext";
import { useCartDrawer } from "../../contexts/shopping-cart/ShoppingCartDrawerContext";
import { useCart } from "../../contexts/shopping-cart/ShoppingCartContext";
import Link from "../link/Link";
import styles from "./Navbar.module.scss";
import { useMemo } from "react";

export function Navbar() {
  const { t } = useTranslation();

  const { openCart } = useCartDrawer();
  const { itemsTotalCount } = useCart();
  const { loading, error } = useProducts();

  const shouldRenderCart = useMemo(() => !loading && !error, [error, loading]);

  return (
    <AppBar className={styles.navbar}>
      <Toolbar>
        <Box display={"flex"} flexGrow={1}>
          <Link path={PathConstants.Home} text={"GadgetGuru"}></Link>
        </Box>

        {shouldRenderCart && (
          <IconButton
            size="large"
            aria-label={t("shoppingCart.title")}
            onClick={openCart}
            title={t("shoppingCart.title")}
          >
            <Badge
              badgeContent={itemsTotalCount}
              color="secondary"
              hidden={itemsTotalCount === 0}
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
