import { ActionPrefixs } from "src/common/constants/ActionPrefixs";
import { VirusId } from "src/virus/constants/Virus";

const prefix = ActionPrefixs.virus;
export const VirusActionType = {
  SHOW_ALL_VIRUS: `${prefix}_SHOW_ALL_VIRUS`,
  HIDE_VIRUS: `${prefix}_HIDE_VIRUS`
};

export const showAllVirusAction = () => ({
  type: VirusActionType.SHOW_ALL_VIRUS
});

export const hideVirusAction = (virusId: VirusId) => ({
  type: VirusActionType.HIDE_VIRUS,
  virusId
});
