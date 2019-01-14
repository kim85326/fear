import { AnyAction } from "redux";
import { MenuActionType } from "./MenuActions";

export interface IMenuState {
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
}

const defaultMenuState = {
  isOpening: false,
  isOpen: false,
  isClosing: false
};

const menuReducer = (
  state: IMenuState = defaultMenuState,
  action: AnyAction
) => {
  switch (action.type) {
    case MenuActionType.OPENING_MENU:
      return {
        ...state,
        isOpening: true
      };

    case MenuActionType.OPEN_MENU:
      return {
        ...state,
        isOpening: false,
        isOpen: true
      };

    case MenuActionType.CLOSING_MENU:
      return {
        ...state,
        isClosing: true
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
