import { useTranslation } from "react-i18next";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import PathConstants from "../../routes/path-constants";
import Link from "../link/Link";
import { useCart, useCartDrawer } from "../../contexts";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const { t } = useTranslation();

  const { openCart } = useCartDrawer();
  const { itemsTotalCount } = useCart();

  return (
    <AppBar className={styles.navbar}>
      <Toolbar>
        <Box display={"flex"} flexGrow={1}>
          <Link path={PathConstants.Home} text={"EShop"}></Link>
        </Box>

        <IconButton
          size="large"
          aria-label={t("shoppingCart.title")}
          onClick={openCart}
          // color="primary"
          title={t("shoppingCart.title")}
        >
          <Badge
            badgeContent={itemsTotalCount}
            // color=""
            hidden={itemsTotalCount === 0}
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
