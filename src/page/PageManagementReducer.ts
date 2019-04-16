import { AnyAction } from "redux";
import { Page } from "./constants/Page";
import { PageManagementActionType } from "./PageManagementAction";

export interface IPageManagementState {
  page: Page;
}

const defaultPageManagementState = {
  page: Page.home
};

const pageManagementReducer = (
  state: IPageManagementState = defaultPageManagementState,
  action: AnyAction
) => {
  switch (action.type) {
    case PageManagementActionType.SET_PAGE:
      return {
        ...state,
        page: action.page
      };

    default:
      return state;
  }
};

export default pageManagementReducer;
