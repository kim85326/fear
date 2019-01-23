import { combineReducers } from "redux";
import answersReducer, { IAnswersState } from "src/answer/AnswersReducer";
import menuReducer, { IMenuState } from "src/common/menu/MenuReducer";
import storyAReducer, { IStoryAState } from "src/storyA/StoryAReducer";
import storyBReducer, { IStoryBState } from "src/storyB/StoryBReducer";
import infoDialogReducer, {
  IInfoDialogState
} from "src/infoDialog/InfoDialogReducer";

export interface IAppState {
  answers: IAnswersState;
  menuState: IMenuState;
  storyAState: IStoryAState;
  storyBState: IStoryBState;
  infoDialogState: IInfoDialogState;
}

const AppReducer = combineReducers({
  answers: answersReducer,
  menuState: menuReducer,
  storyAState: storyAReducer,
  storyBState: storyBReducer,
  infoDialogState: infoDialogReducer
});

export default AppReducer;
