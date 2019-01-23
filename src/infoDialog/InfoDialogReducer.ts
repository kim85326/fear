import { AnyAction } from "redux";
import { InfoDialogActionType } from "./InfoDialogActions";

export interface IInfoDialogState {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const defaultInfoDialogState = {
  isShow: false,
  isShowing: false,
  isHiding: false
};

const infoDialogReducer = (
  state: IInfoDialogState = defaultInfoDialogState,
  action: AnyAction
): IInfoDialogState => {
  switch (action.type) {
    case InfoDialogActionType.OPENING_DIALOG:
      return {
        ...state,
        isShowing: true
      };

    case InfoDialogActionType.OPEN_DIALOG:
      return {
        ...state,
        isShowing: false,
        isShow: true
      };

    case InfoDialogActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
      };

    case InfoDialogActionType.CLOSE_DIALOG:
      return {
        ...defaultInfoDialogState
      };

    default:
      return state;
  }
};

export default infoDialogReducer;
