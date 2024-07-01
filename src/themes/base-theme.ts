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
    divider: theme.dividerColor,
    text: {
      primary: theme.primaryTextColor,
      secondary: theme.secondaryTextColor,
      disabled: theme.disabledTextColor,
    },
  },
  typography: {
    fontWeightRegular: theme.fontWeight_normal,
    fontWeightMedium: theme.fontWeight_semiBold,
    fontWeightBold: theme.fontWeight_bold,
    h1: {
      color: theme.primaryTextColor,
    },
    h2: {
      color: theme.primaryTextColor,
    },
    h3: {
      color: theme.primaryTextColor,
    },
    h4: {
      color: theme.primaryTextColor,
    },
    h5: {
      color: theme.primaryTextColor,
    },
    h6: {
      color: theme.primaryTextColor,
    },
    subtitle1: {
      color: theme.secondaryTextColor,
    },
    subtitle2: {
      color: theme.secondaryTextColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "32px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);
