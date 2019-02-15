import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.fearCity;
export const FearCityActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_C: `${prefix}_SET_IS_SHOW_DIALOG_C`,
  SET_IS_SHOW_BUTTON_A: `${prefix}_SET_IS_SHOW_BUTTON_A`
};

export const setIsFearCityLoadingAction = (isLoading: boolean) => ({
  type: FearCityActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogCAction = (isShow: boolean) => ({
  type: FearCityActionType.SET_IS_SHOW_DIALOG_C,
  isShow
});

export const setIsShowButtonAAction = (isShow: boolean) => ({
  type: FearCityActionType.SET_IS_SHOW_BUTTON_A,
  isShow
});
