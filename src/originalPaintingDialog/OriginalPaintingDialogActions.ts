import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.originalPaintingDialog;
export const OriginalPaintingDialogActionType = {
  OPENING_DIALOG: `${prefix}_OPENING_DIALOG`,
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openingOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.OPENING_DIALOG
});

export const openOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.OPEN_DIALOG
});

export const closingOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.CLOSING_DIALOG
});

export const closeOriginalPaintingDialogAction = () => ({
  type: OriginalPaintingDialogActionType.CLOSE_DIALOG
});
