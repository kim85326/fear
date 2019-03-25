import { AnyAction } from "redux";
import { AnswersActionType } from "./AnswersAction";

export interface IAnswersState {
  answerA: boolean | null;
  answerB: boolean | null;
  answerC: boolean | null;
}

const defaultAnswersState = {
  answerA: null,
  answerB: null,
  answerC: null
};

const answersReducer = (
  state: IAnswersState = defaultAnswersState,
  action: AnyAction
) => {
  switch (action.type) {
    case AnswersActionType.SET_ANSWER_A:
      return {
        ...state,
        answerA: action.answer
      };

    case AnswersActionType.SET_ANSWER_B:
      return {
        ...state,
        answerB: action.answer
      };

    case AnswersActionType.SET_ANSWER_C:
      return {
        ...state,
        answerC: action.answer
      };

    default:
      return state;
  }
};

export default answersReducer;
