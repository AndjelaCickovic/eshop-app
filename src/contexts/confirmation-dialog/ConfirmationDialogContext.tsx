import React, { useContext } from "react";

export interface IConfirmationDialogContext {
  confirm: (message: string, handler: () => void, title?: string) => void;
}

export const ConfirmationDialogContext =
  React.createContext<IConfirmationDialogContext>({
    confirm: (_message: string, _handler: () => void) => {},
  });

export const useConfirmationDialog = () =>
  useContext(ConfirmationDialogContext);
