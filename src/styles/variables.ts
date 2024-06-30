export const theme: ITheme = {
  primaryColor: "#d87e0d",
  primaryDarkColor: "#c75805",
  primaryLightColor: "#e29617",
  primaryVeryLightColor: "#fbf2e1",
  secondaryColor: "#5d5a5a",
  secondaryDarkColor: "#1e1b1b",
  secondaryLightColor: "#999696",
  secondaryVeryLightColor: "#f5f2f2",

  /**Font sizes */
  fontSize_sm: "0.8rem",
  fontSize_md: "1rem",
  fontSize_lg: "1.5rem",
  fontSize_xl: "2rem",
  fontWeight_normal: 400,
  fontWeight_semiBold: 600,
  fontWeight_bold: 700,
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
  fontSize_sm: string;
  fontSize_md: string;
  fontSize_lg: string;
  fontSize_xl: string;
  fontWeight_normal: number;
  fontWeight_semiBold: number;
  fontWeight_bold: number;
}
