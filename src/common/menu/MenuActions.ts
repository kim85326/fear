import { ActionPrefixs } from "../constants/ActionPrefixs";

const prefix = ActionPrefixs.menu;
export const MenuActionType = {
  OPEN_MENU: `${prefix}_OPEN_MENU`,
  CLOSE_MENU: `${prefix}_CLOSE_MENU`
};

export const openMenuAction = () => ({ type: MenuActionType.OPEN_MENU });
export const closeMenuAction = () => ({ type: MenuActionType.CLOSE_MENU });
