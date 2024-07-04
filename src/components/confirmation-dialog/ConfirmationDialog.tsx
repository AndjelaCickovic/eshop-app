import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { DialogContentText } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface ConfirmationDialogProps {
  message: string;
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
  title?: string;
  /**
   * @Default Confirm
   */
  confirmBtnText?: string;
}

export function ConfirmationDialog(props: Readonly<ConfirmationDialogProps>) {
  const { open, onConfirm, onClose, title, message } = props;

  const { t } = useTranslation();

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <Dialog maxWidth="xs" open={open}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogActions>
          <Button onClick={handleConfirm} variant="contained">
            {t("shared.confirm")}
          </Button>
          <Button onClick={handleCancel}>{t("shared.cancel")}</Button>
        </DialogActions>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
