import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogA;
export const InfoDialogAActionType = {
  OPENING_DIALOG: `${prefix}_OPENING_DIALOG`,
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openingInfoDialogAAction = () => ({
  type: InfoDialogAActionType.OPENING_DIALOG
});

export const openInfoDialogAAction = () => ({
  type: InfoDialogAActionType.OPEN_DIALOG
});

export const closingInfoDialogAAction = () => ({
  type: InfoDialogAActionType.CLOSING_DIALOG
});

export const closeInfoDialogAAction = () => ({
  type: InfoDialogAActionType.CLOSE_DIALOG
});
