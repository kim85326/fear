import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.ending;
export const EndingActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_BUTTON_J: `${prefix}_SET_IS_SHOW_BUTTON_J`,
  SET_IS_SHOW_BUTTON_K: `${prefix}_SET_IS_SHOW_BUTTON_K`
};

export const setIsEndingLoadingAction = (isLoading: boolean) => ({
  type: EndingActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowButtonJAction = (isShow: boolean) => ({
  type: EndingActionType.SET_IS_SHOW_BUTTON_J,
  isShow
});

export const setIsShowButtonKAction = (isShow: boolean) => ({
  type: EndingActionType.SET_IS_SHOW_BUTTON_K,
  isShow
});
