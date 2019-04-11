import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.originalPaintingDialog;
export const OriginalPaintingDialogActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.OPEN_DIALOG
});

export const closeOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.CLOSE_DIALOG
});
