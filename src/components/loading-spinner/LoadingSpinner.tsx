import { useTranslation } from "react-i18next";
import { Box, CircularProgress } from "@mui/material";
import styles from "./LoadingSpinner.module.scss";

export function LoadingSpinner() {
  const { t } = useTranslation();
  return (
    <Box className={styles.spinnerContainer}>
      <CircularProgress title={t("shared.loading")} />
    </Box>
  );
}

export default LoadingSpinner;
