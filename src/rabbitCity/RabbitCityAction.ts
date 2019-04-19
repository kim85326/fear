import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.rabbitCity;
export const RabbitCityActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_Q: `${prefix}_SET_IS_SHOW_DIALOG_Q`,
  SET_IS_SHOW_DIALOG_P: `${prefix}_SET_IS_SHOW_DIALOG_P`,
  SET_IS_SHOW_DIALOG_L: `${prefix}_SET_IS_SHOW_DIALOG_L`
};

export const setIsRabbitCityLoadingAction = (isLoading: boolean) => ({
  type: RabbitCityActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogQAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_Q,
  isShow
});

export const setIsShowDialogPAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_P,
  isShow
});

export const setIsShowDialogLAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_L,
  isShow
});
