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
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
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
      fontSize: theme.fontSize_xl,
    },
    h5: {
      color: theme.primaryTextColor,
      fontSize: theme.fontSize_lg,
    },
    h6: {
      color: theme.primaryTextColor,
      fontSize: theme.fontSize_md,
    },
    subtitle1: {
      color: theme.secondaryTextColor,
      fontSize: theme.fontSize_md,
    },
    subtitle2: {
      color: theme.secondaryTextColor,
      fontSize: theme.fontSize_sm,
    },
    body1: {
      color: theme.primaryTextColor,
      fontSize: theme.fontSize_md,
    },
    body2: {
      color: theme.primaryTextColor,
      fontSize: theme.fontSize_sm,
    },
  },
  breakpoints: {
    values: {
      xs: theme.xs,
      sm: theme.sm,
      md: theme.md,
      lg: theme.lg,
      xl: theme.xl,
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.primaryColor,
          ":disabled": {
            color: theme.disabledTextColor,
          },
        },
      },
    },
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
    MuiCard: {
      styleOverrides: {
        root: () => ({
          minWidth: theme.cardMinWidth,
          maxWidth: theme.cardMaxWidth,
          ":hover": {
            boxShadow: theme.boxShadow_lg,
          },
        }),
      },
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);
