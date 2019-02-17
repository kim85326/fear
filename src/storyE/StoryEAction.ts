import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storyE;
export const StoryEActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_PATTERN_F: `${prefix}_SET_IS_SHOW_PATTERN_F`,
  SET_IS_SHOW_BUTTON_H: `${prefix}_SET_IS_SHOW_BUTTON_H`,
  SET_IS_SHOW_BUTTON_I: `${prefix}_SET_IS_SHOW_BUTTON_I`
};

export const setIsStoryELoadingAction = (isLoading: boolean) => ({
  type: StoryEActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowPatternFOfStoryEAction = (isShow: boolean) => ({
  type: StoryEActionType.SET_IS_SHOW_PATTERN_F,
  isShow
});

export const setIsShowButtonHAction = (isShow: boolean) => ({
  type: StoryEActionType.SET_IS_SHOW_BUTTON_H,
  isShow
});

export const setIsShowButtonIAction = (isShow: boolean) => ({
  type: StoryEActionType.SET_IS_SHOW_BUTTON_I,
  isShow
});
