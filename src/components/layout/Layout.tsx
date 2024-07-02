import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";
import { baseTheme } from "../../themes/base-theme";
import { Navbar } from "../navbar/Navbar";
import { ShoppingCart } from "../shopping-cart/ShoppingCart";
import { ShoppingCartProvider } from "../../contexts";
import styles from "./Layout.module.scss";
import ProductsProvider from "../../contexts/products/ProductsContextProvider";

export default function Layout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <ProductsProvider>
        <ShoppingCartProvider>
          <Navbar />
          <main>
            <Grid
              className={styles.container}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* TODO Loading component */}
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </Grid>
          </main>
          <ShoppingCart />
        </ShoppingCartProvider>
      </ProductsProvider>
      {/* TODO Add footer*/}
    </ThemeProvider>
  );
}
