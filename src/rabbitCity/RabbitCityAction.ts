import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.rabbitCity;
export const RabbitCityActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_L: `${prefix}_SET_IS_SHOW_DIALOG_L`,
  SET_IS_SHOW_DIALOG_M: `${prefix}_SET_IS_SHOW_DIALOG_M`,
  SET_IS_SHOW_DIALOG_N: `${prefix}_SET_IS_SHOW_DIALOG_N`,
  SET_IS_SHOW_DIALOG_O: `${prefix}_SET_IS_SHOW_DIALOG_O`
};

export const setIsRabbitCityLoadingAction = (isLoading: boolean) => ({
  type: RabbitCityActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogLAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_L,
  isShow
});

export const setIsShowDialogMAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_M,
  isShow
});

export const setIsShowDialogNAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_N,
  isShow
});

export const setIsShowDialogOAction = (isShow: boolean) => ({
  type: RabbitCityActionType.SET_IS_SHOW_DIALOG_O,
  isShow
});
