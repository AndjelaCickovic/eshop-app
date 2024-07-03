import { useTranslation } from "react-i18next";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Inventory2Outlined, VerifiedOutlined } from "@mui/icons-material";
import { AdditionalInformation } from "../../types";
import styles from "./ProductDetailAdditionalInformation.module.scss";

interface ProductDetailAdditionalInformationProps {
  additionalInformation: AdditionalInformation;
}

export function ProductDetailAdditionalInformation(
  props: Readonly<ProductDetailAdditionalInformationProps>
) {
  const { additionalInformation } = props;

  const { t } = useTranslation();

  return (
    <List
      hidden={
        !additionalInformation["In the Box"] && !additionalInformation.Warranty
      }
      className={styles.fullWidth}
    >
      <Divider />
      {additionalInformation && (
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Inventory2Outlined
              className={styles.primaryIcon}
              titleAccess={t("products.inTheBox").concat(":")}
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={t("products.inTheBox").concat(":")}
            secondary={
              <ul className={styles.indentedList}>
                {(additionalInformation["In the Box"] as string[]).map(
                  (value) => (
                    <li key={value}>
                      <Typography variant="body2" component={"div"}>
                        {value}
                      </Typography>
                    </li>
                  )
                )}
              </ul>
            }
            className={styles.bolderText}
          />
        </ListItem>
      )}
      {additionalInformation.Warranty && (
        <ListItem>
          <ListItemIcon>
            <VerifiedOutlined
              className={styles.primaryIcon}
              titleAccess={t("products.warranty")}
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={additionalInformation.Warranty}
            className={styles.bolderText}
          />
        </ListItem>
      )}
    </List>
  );
}

export default ProductDetailAdditionalInformation;
