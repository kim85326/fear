import { AnyAction } from "redux";
import { EndingActionType } from "./EndingActions";

export interface IEndingState {
  isLoading: boolean;
  isShowButtonJ: boolean;
  isShowButtonK: boolean;
}

const defaultEndingState = {
  isLoading: true,
  isShowButtonJ: false,
  isShowButtonK: false
};

const endingReducer = (
  state: IEndingState = defaultEndingState,
  action: AnyAction
): IEndingState => {
  switch (action.type) {
    case EndingActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case EndingActionType.SET_IS_SHOW_BUTTON_J:
      return {
        ...state,
        isShowButtonJ: action.isShow
      };

    case EndingActionType.SET_IS_SHOW_BUTTON_K:
      return {
        ...state,
        isShowButtonK: action.isShow
      };

    default:
      return state;
  }
};

export default endingReducer;
