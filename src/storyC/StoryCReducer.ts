import { AnyAction } from "redux";
import { StoryCActionType } from "./StoryCActions";

export interface IStoryCState {
  isLoading: boolean;
  isShowDialogK: boolean;
  isShowPatternJ: boolean;
  isShowButtonE: boolean;
  isShowButtonF: boolean;
  isShowButtonG: boolean;
}

const defaultStoryCState = {
  isLoading: true,
  isShowDialogK: false,
  isShowPatternJ: false,
  isShowButtonE: false,
  isShowButtonF: false,
  isShowButtonG: false
};

const storyCReducer = (
  state: IStoryCState = defaultStoryCState,
  action: AnyAction
): IStoryCState => {
  switch (action.type) {
    case StoryCActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case StoryCActionType.SET_IS_SHOW_DIALOG_K:
      return {
        ...state,
        isShowDialogK: action.isShow
      };

    case StoryCActionType.SET_IS_SHOW_PATTERN_J:
      return {
        ...state,
        isShowPatternJ: action.isShow
      };

    case StoryCActionType.SET_IS_SHOW_BUTTON_E:
      return {
        ...state,
        isShowButtonE: action.isShow
      };

    case StoryCActionType.SET_IS_SHOW_BUTTON_F:
      return {
        ...state,
        isShowButtonF: action.isShow
      };

    case StoryCActionType.SET_IS_SHOW_BUTTON_G:
      return {
        ...state,
        isShowButtonG: action.isShow
      };

    default:
      return state;
  }
};

export default storyCReducer;
