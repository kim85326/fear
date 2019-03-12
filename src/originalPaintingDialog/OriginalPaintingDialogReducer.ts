import { AnyAction } from "redux";
import { OriginalPaintingDialogActionType } from "./OriginalPaintingDialogActions";

export interface IOriginalPaintingDialogState {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const defaultOriginalPaintingDialogState = {
  isShow: false,
  isShowing: false,
  isHiding: false
};

const originalPaintingDialogReducer = (
  state: IOriginalPaintingDialogState = defaultOriginalPaintingDialogState,
  action: AnyAction
): IOriginalPaintingDialogState => {
  switch (action.type) {
    case OriginalPaintingDialogActionType.OPENING_DIALOG:
      return {
        ...state,
        isShowing: true
      };

    case OriginalPaintingDialogActionType.OPEN_DIALOG:
      return {
        ...state,
        isShowing: false,
        isShow: true
      };

    case OriginalPaintingDialogActionType.CLOSING_DIALOG:
      return {
        ...state,
        isHiding: true
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
