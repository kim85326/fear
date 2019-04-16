import { ActionPrefixs } from "src/common/constants/ActionPrefixs";
import { Page } from "./constants/Page";

const prefix = ActionPrefixs.page;
export const PageManagementActionType = {
  SET_PAGE: `${prefix}_SET_PAGE`
};

export const setPageAction = (page: Page) => ({
  type: PageManagementActionType.SET_PAGE,
  page
});

export const resetAppAction = () => ({
  type: "RESET_APP"
});
