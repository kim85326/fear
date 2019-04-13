import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.submitFear;
export const SubmitFearActionType = {
  SET_IS_LOADING: `${prefix}_SET_IS_LOADING`,
  SET_SMALL_ANSWER: `${prefix}_SET_SMALL_ANSWER`,
  SET_MEDIUM_ANSWER: `${prefix}_SET_MEDIUM_ANSWER`,
  SET_LARGE_ANSWER: `${prefix}_SET_LARGE_ANSWER`,
  SET_TEMP_ANSWER: `${prefix}_SET_TEMP_ANSWER`,
  HAS_SUBMIT_ANSWER: `${prefix}_HAS_SUBMIT_ANSWER`,
  SET_IS_SHOW_BUTTON_L: `${prefix}_SET_IS_SHOW_BUTTON_L`
};

export const setIsSubmitFearLoadingAction = (isLoading: boolean) => ({
  type: SubmitFearActionType.SET_IS_LOADING,
  isLoading
});

export const setSmallAnswerAction = (answer: string) => ({
  type: SubmitFearActionType.SET_SMALL_ANSWER,
  answer
});

export const setMediumAnswerAction = (answer: string) => ({
  type: SubmitFearActionType.SET_MEDIUM_ANSWER,
  answer
});

export const setLargeAnswerAction = (answer: string) => ({
  type: SubmitFearActionType.SET_LARGE_ANSWER,
  answer
});

export const setTempAnswerAction = (answer: string) => ({
  type: SubmitFearActionType.SET_TEMP_ANSWER,
  answer
});

export const hasSubmitedAnswerAction = () => ({
  type: SubmitFearActionType.HAS_SUBMIT_ANSWER
});

export const setIsShowButtonLAction = (isShow: boolean) => ({
  type: SubmitFearActionType.SET_IS_SHOW_BUTTON_L,
  isShow
});
