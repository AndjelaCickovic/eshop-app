export const theme: ITheme = {
  primaryColor: "#d87e0d",
  primaryDarkColor: "#c75805",
  primaryLightColor: "#e29617",
  primaryVeryLightColor: "#fbf2e1",
  secondaryColor: "#5d5a5a",
  secondaryDarkColor: "#1e1b1b",
  secondaryLightColor: "#999696",
  secondaryVeryLightColor: "#f5f2f2",
  dividerColor: "#0000001f",
  primaryTextColor: "#313131",
  secondaryTextColor: "#919191",
  disabledTextColor: "#C2C2C2",

  /**Font sizes */
  fontSize_sm: "0.9rem",
  fontSize_md: "1rem",
  fontSize_lg: "1.2rem",
  fontSize_xl: "1.5rem",
  fontSize_xxl: "2rem",
  fontWeight_normal: 400,
  fontWeight_semiBold: 600,
  fontWeight_bold: 700,

  margin_sm: "0.5rem",
  margin_md: "2rem",
  margin_lg: "4rem",
  margin_xl: "8rem",
  margin_xxl: "12rem",

  p_sm: "0.5rem",
  p_md: "1rem",

  /**Breakpoints */
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,

  boxShadow_sm: "0px 1px 2px 0px rgba(28, 39, 49, 0.08)",
  boxShadow_md:
    "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
  boxShadow_lg:
    "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",

  cardMinWidth: "9.375rem",
  cardMaxWidth: "21.875rem",
  cardImgHeight: "11.25rem",
};

interface ITheme {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  primaryVeryLightColor: string;
  secondaryColor: string;
  secondaryVeryLightColor: string;
  secondaryLightColor: string;
  secondaryDarkColor: string;
  dividerColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  disabledTextColor: string;

  fontSize_sm: string;
  fontSize_md: string;
  fontSize_lg: string;
  fontSize_xl: string;
  fontSize_xxl: string;

  fontWeight_normal: number;
  fontWeight_semiBold: number;
  fontWeight_bold: number;

  margin_sm: string;
  margin_md: string;
  margin_lg: string;
  margin_xl: string;
  margin_xxl: string;

  p_sm: string;
  p_md: string;

  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;

  boxShadow_sm: string;
  boxShadow_md: string;
  boxShadow_lg: string;

  cardMinWidth: string;
  cardMaxWidth: string;
  cardImgHeight: string;
}
