import { AnyAction } from "redux";
import { InfoDialogAActionType } from "./InfoDialogAActions";

export interface IInfoDialogAState {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const defaultInfoDialogAState = {
  isShow: false,
  isShowing: false,
  isHiding: false
};

const infoDialogAReducer = (
  state: IInfoDialogAState = defaultInfoDialogAState,
  action: AnyAction
): IInfoDialogAState => {
  switch (action.type) {
    case InfoDialogAActionType.OPENING_DIALOG:
      return {
        ...state,
        isShowing: true
      };

    case InfoDialogAActionType.OPEN_DIALOG:
      return {
        ...state,
        isShowing: false,
        isShow: true
      };

    case InfoDialogAActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
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
