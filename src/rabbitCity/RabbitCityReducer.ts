import { AnyAction } from "redux";
import { RabbitCityActionType } from "./RabbitCityAction";

export interface IRabbitCityState {
  isLoading: boolean;
  isShowDialogL: boolean;
  isShowDialogM: boolean;
  isShowDialogN: boolean;
  isShowDialogO: boolean;
}

const defaultRabbitCityState = {
  isLoading: true,
  isShowDialogL: false,
  isShowDialogM: false,
  isShowDialogN: false,
  isShowDialogO: false
};

const rabbitCityReducer = (
  state: IRabbitCityState = defaultRabbitCityState,
  action: AnyAction
): IRabbitCityState => {
  switch (action.type) {
    case RabbitCityActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_L:
      return {
        ...state,
        isShowDialogL: action.isShow
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_M:
      return {
        ...state,
        isShowDialogM: action.isShow
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_N:
      return {
        ...state,
        isShowDialogN: action.isShow
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_O:
      return {
        ...state,
        isShowDialogO: action.isShow
      };

    default:
      return state;
  }
};

export default rabbitCityReducer;
