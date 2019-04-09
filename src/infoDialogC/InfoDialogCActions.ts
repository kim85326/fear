import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogC;
export const InfoDialogCActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openInfoDialogCAction = () => ({
  type: InfoDialogCActionType.OPEN_DIALOG
});

export const closeInfoDialogCAction = () => ({
  type: InfoDialogCActionType.CLOSE_DIALOG
});
