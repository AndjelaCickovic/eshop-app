import { ThemeOptions, createTheme } from "@mui/material";
import { theme } from "../styles/variables";

const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secondaryColor,
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);
