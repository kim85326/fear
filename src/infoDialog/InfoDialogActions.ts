import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialog;
export const InfoDialogActionType = {
  OPENING_DIALOG: `${prefix}_OPENING_DIALOG`,
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openingInfoDialogAction = () => ({
  type: InfoDialogActionType.OPENING_DIALOG
});

export const openInfoDialogAction = () => ({
  type: InfoDialogActionType.OPEN_DIALOG
});

export const closingInfoDialogAction = () => ({
  type: InfoDialogActionType.CLOSING_DIALOG
});

export const closeInfoDialogAction = () => ({
  type: InfoDialogActionType.CLOSE_DIALOG
});
