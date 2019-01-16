import { AnyAction } from "redux";
import { StoryAActionType } from "./StoryAAction";

export interface IStoryAState {
  isLoading: boolean;
  isShowDialogG: boolean;
  isShowDialogH: boolean;
  isShowDialogI: boolean;
  isShowReplyRabbit: boolean;
  isShowButtonB: boolean;
  isShowButtonC: boolean;
}

const defaultStoryAState = {
  isLoading: true,
  isShowDialogG: false,
  isShowDialogH: false,
  isShowDialogI: false,
  isShowReplyRabbit: false,
  isShowButtonB: false,
  isShowButtonC: false
};

const storyAReducer = (
  state: IStoryAState = defaultStoryAState,
  action: AnyAction
) => {
  switch (action.type) {
    case StoryAActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case StoryAActionType.SET_IS_SHOW_DIALOG_G:
      return {
        ...state,
        isShowDialogG: action.isShow
      };

    case StoryAActionType.SET_IS_SHOW_DIALOG_H:
      return {
        ...state,
        isShowDialogH: action.isShow
      };

    case StoryAActionType.SET_IS_SHOW_DIALOG_I:
      return {
        ...state,
        isShowDialogI: action.isShow
      };

    case StoryAActionType.SET_IS_SHOW_REPLY_RABBIT:
      return {
        ...state,
        isShowReplyRabbit: action.isShow
      };

    case StoryAActionType.SET_IS_SHOW_BUTTON_B:
      return {
        ...state,
        isShowButtonB: action.isShow
      };

    case StoryAActionType.SET_IS_SHOW_BUTTON_C:
      return {
        ...state,
        isShowButtonC: action.isShow
      };

    default:
      return state;
  }
};

export default storyAReducer;
