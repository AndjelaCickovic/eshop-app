import { Drawer } from "@mui/material";

export interface ShoppingCartProps {
  open: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export function ShoppingCart(props: Readonly<ShoppingCartProps>) {
  return (
    <Drawer open={props.open} anchor="right" onClose={props.onClose}>
      {"This is shopping cart"}
    </Drawer>
  );
}
