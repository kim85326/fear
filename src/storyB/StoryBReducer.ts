import { AnyAction } from "redux";
import { StoryBActionType } from "./StoryBActions";

export interface IStoryBState {
  isLoading: boolean;
  isShowDialogJ: boolean;
  isShowPatternF: boolean;
  isShowButtonD: boolean;
}

const defaultStoryBState = {
  isLoading: true,
  isShowDialogJ: false,
  isShowPatternF: false,
  isShowButtonD: false
};

const storyBReducer = (
  state: IStoryBState = defaultStoryBState,
  action: AnyAction
): IStoryBState => {
  switch (action.type) {
    case StoryBActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case StoryBActionType.SET_IS_SHOW_DIALOG_J:
      return {
        ...state,
        isShowDialogJ: action.isShow
      };

    case StoryBActionType.SET_IS_SHOW_PATTERN_F:
      return {
        ...state,
        isShowPatternF: action.isShow
      };

    case StoryBActionType.SET_IS_SHOW_BUTTON_D:
      return {
        ...state,
        isShowButtonD: action.isShow
      };

    default:
      return state;
  }
};

export default storyBReducer;
