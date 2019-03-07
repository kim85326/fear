import { AnyAction } from "redux";
import { InfoDialogBActionType } from "./InfoDialogBActions";

export interface IInfoDialogBState {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const defaultInfoDialogBState = {
  isShow: false,
  isShowing: false,
  isHiding: false
};

const infoDialogBReducer = (
  state: IInfoDialogBState = defaultInfoDialogBState,
  action: AnyAction
): IInfoDialogBState => {
  switch (action.type) {
    case InfoDialogBActionType.OPENING_DIALOG:
      return {
        ...state,
        isShowing: true
      };

    case InfoDialogBActionType.OPEN_DIALOG:
      return {
        ...state,
        isShowing: false,
        isShow: true
      };

    case InfoDialogBActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
      };

    case InfoDialogBActionType.CLOSE_DIALOG:
      return {
        ...defaultInfoDialogBState
      };

    default:
      return state;
  }
};

export default infoDialogBReducer;
