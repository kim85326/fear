import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storyC;
export const StoryCActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_K: `${prefix}_SET_IS_SHOW_DIALOG_K`,
  SET_IS_SHOW_PATTERN_J: `${prefix}_SET_IS_SHOW_PATTERN_J`,
  SET_IS_SHOW_BUTTON_E: `${prefix}_SET_IS_SHOW_BUTTON_E`
};

export const setIsStoryCLoadingAction = (isLoading: boolean) => ({
  type: StoryCActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogKAction = (isShow: boolean) => ({
  type: StoryCActionType.SET_IS_SHOW_DIALOG_K,
  isShow
});

export const setIsShowPatternJAction = (isShow: boolean) => ({
  type: StoryCActionType.SET_IS_SHOW_PATTERN_J,
  isShow
});

export const setIsShowButtonEAction = (isShow: boolean) => ({
  type: StoryCActionType.SET_IS_SHOW_BUTTON_E,
  isShow
});
