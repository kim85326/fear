import { AnyAction } from "redux";
import { StorysActionType } from "./StorysAction";

export interface IStorysState {
  show: string;
}

const defaultStorysState = {
  show: 'A',
};

const storysReducer = (
  state: IStorysState = defaultStorysState,
  action: AnyAction
) => {
  switch (action.type) {
    case StorysActionType.SHOW:
      return {
        ...state,
        show: action.show
      };

    default:
      return state;
  }
};

export default storysReducer;
