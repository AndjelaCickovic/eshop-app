import { AppBar, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { baseTheme } from "../../themes/base-theme";

export default function Layout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <AppBar />
      <main>
        {/* TODO Loading component */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <div />
    </ThemeProvider>
  );
}
