import { AnyAction } from "redux";
import { SubmitFearActionType } from "./SubmitFearAction";
import { ISizeAnswer } from "./containers/SubmitFearContainer";

export interface ISubmitFearState extends ISizeAnswer {
  isLoading: boolean;
  tempAnswer: string;
  isSubmitted: boolean;
  isShowButtonL: boolean;
}

const defaultSubmitFearState = {
  isLoading: true,
  smallAnswer: "",
  mediumAnswer: "",
  largeAnswer: "",
  tempAnswer: "",
  isSubmitted: false,
  isShowButtonL: false
};

const submitFearReducer = (
  state: ISubmitFearState = defaultSubmitFearState,
  action: AnyAction
): ISubmitFearState => {
  switch (action.type) {
    case SubmitFearActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case SubmitFearActionType.SET_SMALL_ANSWER:
      return {
        ...state,
        smallAnswer: action.answer
      };

    case SubmitFearActionType.SET_MEDIUM_ANSWER:
      return {
        ...state,
        mediumAnswer: action.answer
      };

    case SubmitFearActionType.SET_LARGE_ANSWER:
      return {
        ...state,
        largeAnswer: action.answer
      };

    case SubmitFearActionType.SET_TEMP_ANSWER:
      return {
        ...state,
        tempAnswer: action.answer
      };

    case SubmitFearActionType.HAS_SUBMIT_ANSWER:
      return {
        ...state,
        isSubmitted: true
      };

    case SubmitFearActionType.SET_IS_SHOW_BUTTON_L:
      return {
        ...state,
        isShowButtonL: action.isShow
      };

    default:
      return state;
  }
};

export default submitFearReducer;
