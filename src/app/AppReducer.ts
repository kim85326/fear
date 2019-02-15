import { combineReducers } from "redux";
import answersReducer, { IAnswersState } from "src/answer/AnswersReducer";
import menuReducer, { IMenuState } from "src/common/menu/MenuReducer";
import storyAReducer, { IStoryAState } from "src/storyA/StoryAReducer";
import storyBReducer, { IStoryBState } from "src/storyB/StoryBReducer";
import infoDialogReducer, {
  IInfoDialogState
} from "src/infoDialog/InfoDialogReducer";
import fearCityReducer, { IFearCityState } from "src/fearCity/FearCityReducer";
import leadingStoryDialogReducer, {
  ILeadingStoryDialogState
} from "src/leadingStoryDialog/LeadingStoryDialogReducer";
import virusReducer, { IVirusState } from "src/virus/virusReducer";

export interface IAppState {
  answers: IAnswersState;
  menuState: IMenuState;
  storyAState: IStoryAState;
  storyBState: IStoryBState;
  infoDialogState: IInfoDialogState;
  fearCityState: IFearCityState;
  leadingStoryDialogState: ILeadingStoryDialogState;
  virusState: IVirusState;
}

const AppReducer = combineReducers({
  answers: answersReducer,
  menuState: menuReducer,
  storyAState: storyAReducer,
  storyBState: storyBReducer,
  infoDialogState: infoDialogReducer,
  fearCityState: fearCityReducer,
  leadingStoryDialogState: leadingStoryDialogReducer,
  virusState: virusReducer
});

export default AppReducer;
