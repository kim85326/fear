import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storyA;
export const StoryAActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_IS_SHOW_DIALOG_G: `${prefix}_SET_IS_SHOW_DIALOG_G`,
  SET_IS_SHOW_DIALOG_H: `${prefix}_SET_IS_SHOW_DIALOG_H`,
  SET_IS_SHOW_DIALOG_I: `${prefix}_SET_IS_SHOW_DIALOG_I`,
  SET_IS_SHOW_REPLY_RABBIT: `${prefix}_SET_IS_SHOW_REPLY_RABBIT`,
  SET_IS_SHOW_BUTTON_B: `${prefix}_SET_IS_SHOW_BUTTON_B`,
  SET_IS_SHOW_BUTTON_C: `${prefix}_SET_IS_SHOW_BUTTON_C`
};

export const setIsStoryALoadingGAction = (isLoading: boolean) => ({
  type: StoryAActionType.SET_IS_LOADING,
  isLoading
});

export const setIsShowDialogGAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_DIALOG_G,
  isShow
});

export const setIsShowDialogHAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_DIALOG_H,
  isShow
});

export const setIsShowDialogIAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_DIALOG_I,
  isShow
});

export const setIsShowReplyRabbitAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_REPLY_RABBIT,
  isShow
});

export const setIsShowButtonBAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_BUTTON_B,
  isShow
});

export const setIsShowButtonCAction = (isShow: boolean) => ({
  type: StoryAActionType.SET_IS_SHOW_BUTTON_C,
  isShow
});
