import { AnyAction } from "redux";
import { AdventureStoryActionType } from "./AdventureStoryActions";

export interface IAdventureStoryState {
  isShow: boolean;
  isHiding: boolean;
  isLoading: boolean;
  isShowEasonThink: boolean;
  isShowButtonF: boolean;
  isShowButtonG: boolean;
  imgY: number;
}

const defaultAdventureStoryState = {
  isShow: false,
  isHiding: false,
  isLoading: true,
  isShowEasonThink: false,
  isShowButtonF: false,
  isShowButtonG: false,
  imgY: 0
};

const adventureStoryReducer = (
  state: IAdventureStoryState = defaultAdventureStoryState,
  action: AnyAction
): IAdventureStoryState => {
  switch (action.type) {
    case AdventureStoryActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
      };

    case AdventureStoryActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
      };

    case AdventureStoryActionType.CLOSE_DIALOG:
      return {
        ...defaultAdventureStoryState
      };

    case AdventureStoryActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case AdventureStoryActionType.SET_IS_SHOW_EASON_THINK:
      return {
        ...state,
        isShowEasonThink: action.isShow
      };

    case AdventureStoryActionType.SET_IS_SHOW_BUTTON_F:
      return {
        ...state,
        isShowButtonF: action.isShow
      };

    case AdventureStoryActionType.SET_IS_SHOW_BUTTON_G:
      return {
        ...state,
        isShowButtonG: action.isShow
      };

    case AdventureStoryActionType.MOVE_STORY_LEFT:
      return {
        ...state,
        imgY: state.imgY + 10
      };

    case AdventureStoryActionType.MOVE_STORY_RIGHT:
      return {
        ...state,
        imgY: state.imgY - 10
      };

    default:
      return state;
  }
};

export default adventureStoryReducer;
