import { AnyAction } from "redux";
import { VirusActionType } from "./virusAction";
import { IViruses } from 'src/virus/constants/Virus';

export interface IVirusState {
  viruses: IViruses;
}

const defaultVirusState = {
  viruses: {
    virusA: {
      isShow: true
    },
    virusB: {
      isShow: true
    },
    virusC: {
      isShow: true
    },
    virusD: {
      isShow: true
    },
    virusE: {
      isShow: true
    },
    virusF: {
      isShow: true
    },
    virusG: {
      isShow: true
    }
  }
};

const virusReducer = (
  state: IVirusState = defaultVirusState,
  action: AnyAction
): IVirusState => {
  const viruses = JSON.parse(JSON.stringify(state.viruses));

  switch (action.type) {
    case VirusActionType.SHOW_ALL_VIRUS:
      return {
        ...defaultVirusState
      };

    case VirusActionType.HIDE_VIRUS:
      viruses[action.virusId] = false;

      return {
        ...state,
        viruses
      };

    default:
      return state;
  }
};

export default virusReducer;
