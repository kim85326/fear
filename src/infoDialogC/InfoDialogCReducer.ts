import { AnyAction } from "redux";
import { InfoDialogCActionType } from "./InfoDialogCActions";

export interface IInfoDialogCState {
  isShow: boolean;
}

const defaultInfoDialogCState = {
  isShow: false
};

const infoDialogCReducer = (
  state: IInfoDialogCState = defaultInfoDialogCState,
  action: AnyAction
): IInfoDialogCState => {
  switch (action.type) {
    case InfoDialogCActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
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
