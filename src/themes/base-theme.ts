import { ThemeOptions, createTheme } from "@mui/material";
import { theme } from "../styles/variables";

const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: theme.primaryColor,
      light: theme.primaryLightColor,
      dark: theme.primaryDarkColor,
    },
    secondary: {
      main: theme.secondaryColor,
      light: theme.secondaryLightColor,
      dark: theme.secondaryDarkColor,
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);
