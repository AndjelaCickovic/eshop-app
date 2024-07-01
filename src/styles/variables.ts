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
  fontSize_sm: "0.8rem",
  fontSize_md: "1rem",
  fontSize_lg: "1.5rem",
  fontSize_xl: "2rem",
  fontWeight_normal: 400,
  fontWeight_semiBold: 600,
  fontWeight_bold: 700,

  margin_sm: "0.5rem",
  margin_md: "2rem",
  margin_lg: "4rem",
  margin_xl: "8rem",
  margin_xxl: "12rem",
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

  fontWeight_normal: number;
  fontWeight_semiBold: number;
  fontWeight_bold: number;

  margin_sm: string;
  margin_md: string;
  margin_lg: string;
  margin_xl: string;
  margin_xxl: string;
}
