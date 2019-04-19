import { combineReducers, AnyAction } from "redux";
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
import submitFearReducer, {
  ISubmitFearState
} from "src/submitFear/SubmitFearReducer";
import pageManagementReducer, {
  IPageManagementState
} from "src/page/PageManagementReducer";
import rabbitCityReducer, {
  IRabbitCityState
} from "src/rabbitCity/RabbitCityReducer";

export interface IAppState {
  pageManagementState: IPageManagementState;
  answersState: IAnswersState;
  menuState: IMenuState;
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
  submitFearState: ISubmitFearState;
  endingState: IEndingState;
  rabbitCityState: IRabbitCityState;
}

const rootReducer = combineReducers({
  pageManagementState: pageManagementReducer,
  answersState: answersReducer,
  menuState: menuReducer,
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
  submitFearState: submitFearReducer,
  endingState: endingReducer,
  rabbitCityState: rabbitCityReducer
});

const AppReducer = (state: any, action: AnyAction) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return rootReducer(state, action);
};

export default AppReducer;
