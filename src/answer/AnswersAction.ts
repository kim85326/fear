import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.answer;
export const AnswersActionType = {
  SET_ANSWER_A: `${prefix}_SET_ANSWER_A`
};

export const setAnswerAAction = (answer: boolean) => ({
  type: AnswersActionType.SET_ANSWER_A,
  answer
});
