import { combineReducers } from "redux";
import menuReducer, { IMenuState } from "src/common/menu/MenuReducer";

export interface IAppState {
  menuState: IMenuState;
}

const AppReducer = combineReducers({
  menuState: menuReducer
});

export default AppReducer;
