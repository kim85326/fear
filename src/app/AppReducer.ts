import { combineReducers } from "redux";
import answersReducer, { IAnswersState } from "src/answer/AnswersReducer";
import menuReducer, { IMenuState } from "src/common/menu/MenuReducer";
import storyAReducer, { IStoryAState } from "src/storyA/StoryAReducer";

export interface IAppState {
  answers: IAnswersState;
  menuState: IMenuState;
  storyAState: IStoryAState;
}

const AppReducer = combineReducers({
  answers: answersReducer,
  menuState: menuReducer,
  storyAState: storyAReducer
});

export default AppReducer;
