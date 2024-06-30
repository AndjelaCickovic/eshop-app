import { Typography } from "@mui/material";
import { Link as RouterLink, To } from "react-router-dom";
import styles from "./Link.module.scss";

export interface LinkProps {
  text: string;
  path: To;
}

//TODO: Set all props as readonly
export default function Link(props: Readonly<LinkProps>) {
  return (
    <RouterLink to={props.path} className={styles["link"]}>
      <Typography variant="h6">{props.text}</Typography>
    </RouterLink>
  );
}
