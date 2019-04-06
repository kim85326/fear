import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";

import EasonThink from "../components/EasonThink";
import {
  setIsShowButtonFAction,
  setIsShowButtonGAction
} from "src/storyC/StoryCActions";

interface IEasonThinkContainerProps extends IEasonThinkStateProps {
  dispatch: Dispatch;
}

interface IEasonThinkStateProps {
  isShowEasonThink: boolean;
}

const mapStateToProps = (state: IAppState): IEasonThinkStateProps => ({
  isShowEasonThink: state.adventureStoryState.isShowEasonThink
});

class EasonThinkContainer extends React.Component<IEasonThinkContainerProps> {
  constructor(props: IEasonThinkContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <EasonThink
        handleClick={this.handleClick}
        isShowEasonThink={this.props.isShowEasonThink}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonFAction(true));
    this.props.dispatch(setIsShowButtonGAction(true));
  }
}

const ConnectedEasonThink = connect(mapStateToProps)(EasonThinkContainer);

export default ConnectedEasonThink;
