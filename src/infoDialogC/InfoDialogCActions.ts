import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogC;
export const InfoDialogCActionType = {
  OPENING_DIALOG: `${prefix}_OPENING_DIALOG`,
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openingInfoDialogCAction = () => ({
  type: InfoDialogCActionType.OPENING_DIALOG
});

export const openInfoDialogCAction = () => ({
  type: InfoDialogCActionType.OPEN_DIALOG
});

export const closingInfoDialogCAction = () => ({
  type: InfoDialogCActionType.CLOSING_DIALOG
});

export const closeInfoDialogCAction = () => ({
  type: InfoDialogCActionType.CLOSE_DIALOG
});
