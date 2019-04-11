import { AnyAction } from "redux";
import { OriginalPaintingDialogActionType } from "./OriginalPaintingDialogActions";

export interface IOriginalPaintingDialogState {
  isShow: boolean;
}

const defaultOriginalPaintingDialogState = {
  isShow: false
};

const originalPaintingDialogReducer = (
  state: IOriginalPaintingDialogState = defaultOriginalPaintingDialogState,
  action: AnyAction
): IOriginalPaintingDialogState => {
  switch (action.type) {
    case OriginalPaintingDialogActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
      };

    case OriginalPaintingDialogActionType.CLOSE_DIALOG:
      return {
        ...defaultOriginalPaintingDialogState
      };

    default:
      return state;
  }
};

export default originalPaintingDialogReducer;
