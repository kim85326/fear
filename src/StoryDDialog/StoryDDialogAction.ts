import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storyDDialog;
export const StoryDDialogActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`
};

export const openStoryDDialogAction = () => ({
  type: StoryDDialogActionType.OPEN_DIALOG
});

export const closeStoryDDialogAction = () => ({
  type: StoryDDialogActionType.CLOSE_DIALOG
});
