import { AnyAction } from "redux";
import { StoryDDialogActionType } from "./StoryDDialogAction";

export interface IStoryDDialogState {
  isShow: boolean;
}

const defaultStoryDDialogState = {
  isShow: true
};

const storyDDialogReducer = (
  state: IStoryDDialogState = defaultStoryDDialogState,
  action: AnyAction
): IStoryDDialogState => {
  switch (action.type) {
    case StoryDDialogActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
      };

    case StoryDDialogActionType.CLOSE_DIALOG:
      return {
        ...state,
        isShow: false
      };

    default:
      return state;
  }
};

export default storyDDialogReducer;
