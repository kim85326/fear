import { AnyAction } from "redux";
import { StoryEActionType } from "./StoryEAction";

export interface IStoryEState {
  isLoading: boolean;
  isShowPatternF: boolean;
  isShowButtonH: boolean;
  isShowButtonI: boolean;
}

const defaultStoryEState = {
  isLoading: true,
  isShowPatternF: false,
  isShowButtonH: false,
  isShowButtonI: false
};

const storyEReducer = (
  state: IStoryEState = defaultStoryEState,
  action: AnyAction
): IStoryEState => {
  switch (action.type) {
    case StoryEActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case StoryEActionType.SET_IS_SHOW_PATTERN_F:
      return {
        ...state,
        isShowPatternF: action.isShow
      };

    case StoryEActionType.SET_IS_SHOW_BUTTON_H:
      return {
        ...state,
        isShowButtonH: action.isShow
      };

    case StoryEActionType.SET_IS_SHOW_BUTTON_I:
      return {
        ...state,
        isShowButtonI: action.isShow
      };

    default:
      return state;
  }
};

export default storyEReducer;
