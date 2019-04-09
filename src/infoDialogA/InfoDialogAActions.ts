import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.infoDialogA;
export const InfoDialogAActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openInfoDialogAAction = () => ({
  type: InfoDialogAActionType.OPEN_DIALOG
});

export const closeInfoDialogAAction = () => ({
  type: InfoDialogAActionType.CLOSE_DIALOG
});
