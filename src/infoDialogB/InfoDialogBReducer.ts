import { AnyAction } from "redux";
import { InfoDialogBActionType } from "./InfoDialogBActions";

export interface IInfoDialogBState {
  isShow: boolean;
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
    case InfoDialogBActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
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
