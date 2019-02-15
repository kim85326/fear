import { AnyAction } from "redux";
import { FearCityActionType } from "./FearCityAction";

export interface IFearCityState {
  isLoading: boolean;
  isShowDialogC: boolean;
  isShowButtonA: boolean;
}

const defaultFearCityState = {
  isLoading: true,
  isShowDialogC: false,
  isShowButtonA: false
};

const fearCityReducer = (
  state: IFearCityState = defaultFearCityState,
  action: AnyAction
): IFearCityState => {
  switch (action.type) {
    case FearCityActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case FearCityActionType.SET_IS_SHOW_DIALOG_C:
      return {
        ...state,
        isShowDialogC: action.isShow
      };

    case FearCityActionType.SET_IS_SHOW_BUTTON_A:
      return {
        ...state,
        isShowButtonA: action.isShow
      };

    default:
      return state;
  }
};

export default fearCityReducer;
