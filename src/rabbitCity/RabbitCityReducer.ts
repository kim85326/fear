import { AnyAction } from "redux";
import { RabbitCityActionType } from "./RabbitCityAction";

export interface IRabbitCityState {
  isLoading: boolean;
  isShowDialogQ: boolean;
  isShowDialogP: boolean;
  isShowDialogL: boolean;
}

const defaultRabbitCityState = {
  isLoading: true,
  isShowDialogQ: false,
  isShowDialogP: false,
  isShowDialogL: false
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

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_Q:
      return {
        ...state,
        isShowDialogQ: action.isShow
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_P:
      return {
        ...state,
        isShowDialogQ: action.isShow
      };

    case RabbitCityActionType.SET_IS_SHOW_DIALOG_L:
      return {
        ...state,
        isShowDialogQ: action.isShow
      };

    default:
      return state;
  }
};

export default rabbitCityReducer;
