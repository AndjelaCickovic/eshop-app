import { Grid, ThemeProvider } from "@mui/material";
import { Suspense, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { baseTheme } from "../../themes/base-theme";
import { Navbar } from "../navbar/Navbar";
import { ShoppingCart } from "../shopping-cart/ShoppingCart";

export default function Layout() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);

  const toggleShoppingCart = useCallback(() => {
    setIsShoppingCartOpen((prevValue) => !prevValue);
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <Navbar onShoppingCartClick={toggleShoppingCart} />
      <main>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          marginX={"auto"}
          marginY={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* TODO Loading component */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Grid>
      </main>
      <ShoppingCart open={isShoppingCartOpen} onClose={toggleShoppingCart} />
      {/* TODO Add footer*/}
    </ThemeProvider>
  );
}
