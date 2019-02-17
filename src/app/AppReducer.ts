import { combineReducers } from "redux";
import answersReducer, { IAnswersState } from "src/answer/AnswersReducer";
import menuReducer, { IMenuState } from "src/common/menu/MenuReducer";
import storyAReducer, { IStoryAState } from "src/storyA/StoryAReducer";
import storyBReducer, { IStoryBState } from "src/storyB/StoryBReducer";
import infoDialogAReducer, {
  IInfoDialogAState
} from "src/infoDialogA/InfoDialogAReducer";
import fearCityReducer, { IFearCityState } from "src/fearCity/FearCityReducer";
import leadingStoryDialogReducer, {
  ILeadingStoryDialogState
} from "src/leadingStoryDialog/LeadingStoryDialogReducer";
import virusReducer, { IVirusState } from "src/virus/virusReducer";
import storyDDialogReducer, {
  IStoryDDialogState
} from "src/StoryDDialog/StoryDDialogReducer";
import storyEReducer, { IStoryEState } from "src/storyE/StoryEReducer";
import infoDialogCReducer, {
  IInfoDialogCState
} from "src/infoDialogC/InfoDialogCReducer";

export interface IAppState {
  answers: IAnswersState;
  menuState: IMenuState;
  storyAState: IStoryAState;
  storyBState: IStoryBState;
  infoDialogAState: IInfoDialogAState;
  fearCityState: IFearCityState;
  leadingStoryDialogState: ILeadingStoryDialogState;
  virusState: IVirusState;
  storyDDialogState: IStoryDDialogState;
  storyEState: IStoryEState;
  infoDialogCState: IInfoDialogCState;
}

const AppReducer = combineReducers({
  answers: answersReducer,
  menuState: menuReducer,
  storyAState: storyAReducer,
  storyBState: storyBReducer,
  infoDialogAState: infoDialogAReducer,
  fearCityState: fearCityReducer,
  leadingStoryDialogState: leadingStoryDialogReducer,
  virusState: virusReducer,
  storyDDialogState: storyDDialogReducer,
  storyEState: storyEReducer,
  infoDialogCState: infoDialogCReducer
});

export default AppReducer;
