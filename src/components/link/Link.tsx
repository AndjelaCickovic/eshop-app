import { Typography, TypographyVariant } from "@mui/material";
import { Link as RouterLink, To } from "react-router-dom";

export interface LinkProps {
  text: string;
  path: To;
  /**
   * @default 'h6'
   */
  textVariant?: TypographyVariant;
}

export function Link(props: Readonly<LinkProps>) {
  return (
    <RouterLink to={props.path}>
      <Typography variant={props.textVariant ?? "h6"}>{props.text}</Typography>
    </RouterLink>
  );
}

export default Link;
