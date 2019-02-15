import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.leadingStoryDialog;
export const LeadingStoryDialogActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openLeadingStoryDialogAction = () => ({
  type: LeadingStoryDialogActionType.OPEN_DIALOG
});

export const closeLeadingStoryDialogAction = () => ({
  type: LeadingStoryDialogActionType.CLOSE_DIALOG
});
