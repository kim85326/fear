import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogB;
export const InfoDialogBActionType = {
  OPENING_DIALOG: `${prefix}_OPENING_DIALOG`,
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openingInfoDialogBAction = () => ({
  type: InfoDialogBActionType.OPENING_DIALOG
});

export const openInfoDialogBAction = () => ({
  type: InfoDialogBActionType.OPEN_DIALOG
});

export const closingInfoDialogBAction = () => ({
  type: InfoDialogBActionType.CLOSING_DIALOG
});

export const closeInfoDialogBAction = () => ({
  type: InfoDialogBActionType.CLOSE_DIALOG
});
