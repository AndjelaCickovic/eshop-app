import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Grid, ThemeProvider } from "@mui/material";
import { baseTheme } from "../../themes/base-theme";
import { Navbar } from "../navbar/Navbar";
import {
  ConfirmationDialogContextProvider,
  ProductsProvider,
  ShoppingCartProvider,
} from "../../contexts";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Layout.module.scss";

export function Layout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <ConfirmationDialogContextProvider>
        <ProductsProvider>
          <ShoppingCartProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Navbar />
            <main>
              <Grid
                className={styles.container}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Suspense fallback={<LoadingSpinner />}>
                  <Outlet />
                </Suspense>
              </Grid>
            </main>
          </ShoppingCartProvider>
        </ProductsProvider>
      </ConfirmationDialogContextProvider>

      {/* TODO Add footer*/}
    </ThemeProvider>
  );
}

export default Layout;
