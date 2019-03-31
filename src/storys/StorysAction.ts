import { ActionPrefixs } from "src/common/constants/ActionPrefixs";

const prefix = ActionPrefixs.storys;
export const StorysActionType = {
  SHOW: `${prefix}_SHOW`
};

export const showStoryAction = (show: string) => ({
  type: StorysActionType.SHOW,
  show
});
