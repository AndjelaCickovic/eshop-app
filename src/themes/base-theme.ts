import { ThemeOptions, createTheme } from "@mui/material";

const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#d87e0d",
    },
    secondary: {
      main: "#2f2c2c",
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);
