import { AnyAction } from "redux";
import { LeadingStoryDialogActionType } from "./LeadingStoryDialogAction";

export interface ILeadingStoryDialogState {
  isShow: boolean;
}

const defaultLeadingStoryDialogState = {
  isShow: true
};

const leadingStoryDialogReducer = (
  state: ILeadingStoryDialogState = defaultLeadingStoryDialogState,
  action: AnyAction
): ILeadingStoryDialogState => {
  switch (action.type) {
    case LeadingStoryDialogActionType.OPEN_DIALOG:
      return {
        ...state,
        isShow: true
      };

    case LeadingStoryDialogActionType.CLOSE_DIALOG:
      return {
        ...state,
        isShow: false
      };

    default:
      return state;
  }
};

export default leadingStoryDialogReducer;
