import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogB;
export const InfoDialogBActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openInfoDialogBAction = () => ({
  type: InfoDialogBActionType.OPEN_DIALOG
});

export const closeInfoDialogBAction = () => ({
  type: InfoDialogBActionType.CLOSE_DIALOG
});
