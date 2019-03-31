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
import endingReducer, { IEndingState } from "src/ending/EndingReducer";
import infoDialogBReducer, {
  IInfoDialogBState
} from "src/infoDialogB/InfoDialogBReducer";
import storyCReducer, { IStoryCState } from "src/storyC/StoryCReducer";
import originalPaintingDialogReducer, {
  IOriginalPaintingDialogState
} from "src/originalPaintingDialog/OriginalPaintingDialogReducer";
import adventureStoryReducer, {
  IAdventureStoryState
} from "src/adventureStory/AdventureStoryReducer";
import storysReducer, { IStorysState } from "src/storys/StorysReducer";

export interface IAppState {
  answersState: IAnswersState;
  menuState: IMenuState;
  storysState: IStorysState;
  storyAState: IStoryAState;
  storyBState: IStoryBState;
  storyCState: IStoryCState;
  adventureStoryState: IAdventureStoryState;
  infoDialogAState: IInfoDialogAState;
  infoDialogBState: IInfoDialogBState;
  originalPaintingDialogState: IOriginalPaintingDialogState;
  fearCityState: IFearCityState;
  leadingStoryDialogState: ILeadingStoryDialogState;
  virusState: IVirusState;
  storyDDialogState: IStoryDDialogState;
  storyEState: IStoryEState;
  infoDialogCState: IInfoDialogCState;
  endingState: IEndingState;
}

const AppReducer = combineReducers({
  answersState: answersReducer,
  menuState: menuReducer,
  storysState: storysReducer,
  storyAState: storyAReducer,
  storyBState: storyBReducer,
  storyCState: storyCReducer,
  adventureStoryState: adventureStoryReducer,
  infoDialogAState: infoDialogAReducer,
  infoDialogBState: infoDialogBReducer,
  originalPaintingDialogState: originalPaintingDialogReducer,
  fearCityState: fearCityReducer,
  leadingStoryDialogState: leadingStoryDialogReducer,
  virusState: virusReducer,
  storyDDialogState: storyDDialogReducer,
  storyEState: storyEReducer,
  infoDialogCState: infoDialogCReducer,
  endingState: endingReducer
});

export default AppReducer;
