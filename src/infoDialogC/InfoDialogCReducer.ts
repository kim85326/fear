import { AnyAction } from "redux";
import { InfoDialogCActionType } from "./InfoDialogCActions";

export interface IInfoDialogCState {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const defaultInfoDialogCState = {
  isShow: false,
  isShowing: false,
  isHiding: false
};

const infoDialogCReducer = (
  state: IInfoDialogCState = defaultInfoDialogCState,
  action: AnyAction
): IInfoDialogCState => {
  switch (action.type) {
    case InfoDialogCActionType.OPENING_DIALOG:
      return {
        ...state,
        isShowing: true
      };

    case InfoDialogCActionType.OPEN_DIALOG:
      return {
        ...state,
        isShowing: false,
        isShow: true
      };

    case InfoDialogCActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
      };

    case InfoDialogCActionType.CLOSE_DIALOG:
      return {
        ...defaultInfoDialogCState
      };

    default:
      return state;
  }
};

export default infoDialogCReducer;
