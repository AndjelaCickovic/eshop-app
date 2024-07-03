import { useState, useCallback, useMemo } from "react";
import ConfirmationDialog from "../../components/confirmation-dialog/ConfirmationDialog";
import {
  ConfirmationDialogContext,
  IConfirmationDialogContext,
} from "./ConfirmationDialogContext";

export function ConfirmationDialogContextProvider(
  props: Readonly<React.PropsWithChildren>
) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string | undefined>();
  const [handler, setHandler] = useState<() => void>(() => {});

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const confirm = useCallback(
    (message: string, handler: () => void, title?: string) => {
      const wrappedHandler = () => {
        handler();
        handleClose();
      };

      setHandler(() => wrappedHandler);
      setOpen(true);
      setMessage(message);
      setTitle(title);
    },
    [handleClose]
  );

  const contextValue: IConfirmationDialogContext = useMemo(() => {
    return { confirm };
  }, [confirm]);

  return (
    <ConfirmationDialogContext.Provider value={contextValue}>
      {props.children}
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        message={message}
        title={title}
        onConfirm={handler}
      />
    </ConfirmationDialogContext.Provider>
  );
}
