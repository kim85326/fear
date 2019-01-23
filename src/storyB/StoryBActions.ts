import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storyB;
export const StoryBActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_J: `${prefix}_SET_IS_SHOW_DIALOG_J`,
  SET_IS_SHOW_PATTERN_F: `${prefix}_SET_IS_SHOW_PATTERN_F`,
  SET_IS_SHOW_BUTTON_D: `${prefix}_SET_IS_SHOW_BUTTON_D`
};

export const setIsStoryBLoadingAction = (isLoading: boolean) => ({
  type: StoryBActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogJAction = (isShow: boolean) => ({
  type: StoryBActionType.SET_IS_SHOW_DIALOG_J,
  isShow
});

export const setIsShowPatternFAction = (isShow: boolean) => ({
  type: StoryBActionType.SET_IS_SHOW_PATTERN_F,
  isShow
});

export const setIsShowButtonDAction = (isShow: boolean) => ({
  type: StoryBActionType.SET_IS_SHOW_BUTTON_D,
  isShow
});
