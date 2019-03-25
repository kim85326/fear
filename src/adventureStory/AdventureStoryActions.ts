import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.adventureStory;
export const AdventureStoryActionType = {
  OPEN_DIALOG: `${prefix}_OPEN_DIALOG`,
  CLOSING_DIALOG: `${prefix}_CLOSING_DIALOG`,
  CLOSE_DIALOG: `${prefix}_CLOSE_DIALOG`,
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_EASON_THINK: `${prefix}_SET_IS_SHOW_EASON_THINK`,
  SET_IS_SHOW_BUTTON_F: `${prefix}_SET_IS_SHOW_BUTTON_F`,
  SET_IS_SHOW_BUTTON_G: `${prefix}_SET_IS_SHOW_BUTTON_G`,
  MOVE_STORY_LEFT: `${prefix}_MOVE_STORY_LEFT`,
  MOVE_STORY_RIGHT: `${prefix}_MOVE_STORY_RIGHT`
};

export const openAdventureStoryAction = () => ({
  type: AdventureStoryActionType.OPEN_DIALOG
});

export const closingAdventureStoryAction = () => ({
  type: AdventureStoryActionType.CLOSING_DIALOG
});

export const closeAdventureStoryAction = () => ({
  type: AdventureStoryActionType.CLOSE_DIALOG
});

export const setIsAdventureStoryLoadingAction = (isLoading: boolean) => ({
  type: AdventureStoryActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowEasonThinkAction = (isShow: boolean) => ({
  type: AdventureStoryActionType.SET_IS_SHOW_EASON_THINK,
  isShow
});

export const setIsShowButtonFAction = (isShow: boolean) => ({
  type: AdventureStoryActionType.SET_IS_SHOW_BUTTON_F,
  isShow
});

export const setIsShowButtonGAction = (isShow: boolean) => ({
  type: AdventureStoryActionType.SET_IS_SHOW_BUTTON_G,
  isShow
});

export const moveAdventureStoryLeftAction = () => ({
  type: AdventureStoryActionType.MOVE_STORY_LEFT
});

export const moveAdventureStoryRightAction = () => ({
  type: AdventureStoryActionType.MOVE_STORY_RIGHT
});
