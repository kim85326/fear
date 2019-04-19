import { AnyAction } from "redux";
import { MenuActionType } from "./MenuActions";

export interface IMenuState {
  isOpen: boolean;
}

const defaultMenuState = {
  isOpen: false
};

const menuReducer = (
  state: IMenuState = defaultMenuState,
  action: AnyAction
) => {
  switch (action.type) {
    case MenuActionType.OPEN_MENU:
      return {
        ...state,
        isOpen: true
      };

    case MenuActionType.CLOSE_MENU:
      return {
        ...defaultMenuState
      };

    default:
      return state;
  }
};

export default menuReducer;
