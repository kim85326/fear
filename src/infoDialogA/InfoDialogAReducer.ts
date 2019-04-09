import { AnyAction } from "redux";
import { InfoDialogAActionType } from "./InfoDialogAActions";

export interface IInfoDialogAState {
  isShow: boolean;
}

const defaultInfoDialogAState = {
  isShow: false
};

const infoDialogAReducer = (
  state: IInfoDialogAState = defaultInfoDialogAState,
  action: AnyAction
): IInfoDialogAState => {
  switch (action.type) {
    case InfoDialogAActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
      };

    case InfoDialogAActionType.CLOSE_DIALOG:
      return {
        ...defaultInfoDialogAState
      };

    default:
      return state;
  }
};

export default infoDialogAReducer;
