import { ActionPrefixs } from "../constants/ActionPrefixs";

const prefix = ActionPrefixs.menu;
export const MenuActionType = {
  OPENING_MENU: `${prefix}_OPENING_MENU`,
  OPEN_MENU: `${prefix}_OPEN_MENU`,
  CLOSING_MENU: `${prefix}_CLOSING_MENU`,
  CLOSE_MENU: `${prefix}_CLOSE_MENU`
};

export const openingMenuAction = () => ({ type: MenuActionType.OPENING_MENU });
export const openMenuAction = () => ({ type: MenuActionType.OPEN_MENU });
export const closingMenuAction = () => ({ type: MenuActionType.CLOSING_MENU });
export const closeMenuAction = () => ({ type: MenuActionType.CLOSE_MENU });
