import { AnyAction } from "redux";
import { AnswersActionType } from "./AnswersAction";

export interface IAnswersState {
  answerA: boolean | null;
}

const defaultAnswersState = {
  answerA: null
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

    default:
      return state;
  }
};

export default answersReducer;
