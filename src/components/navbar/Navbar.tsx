import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import PathConstants from "../../routes/path-constants";
import Link from "../link/Link";
import { useTranslation } from "react-i18next";

export interface NavbarProps {
  onShoppingCartClick: () => void;
}

export function Navbar(props: Readonly<NavbarProps>) {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display={"flex"} flexGrow={1}>
          <Link path={PathConstants.Home} text={"EShop"}></Link>
        </Box>
        <IconButton
          size="large"
          aria-label={t("shoppingCart.title")}
          onClick={props.onShoppingCartClick}
          color="inherit"
          title={t("shoppingCart.title")}
        >
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
