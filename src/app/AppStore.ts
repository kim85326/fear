import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AppReducer from "./AppReducer";

const store = createStore(AppReducer, composeWithDevTools());

export default store;
