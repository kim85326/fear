import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import BoyE from "../components/BoyE";
import { setIsShowButtonDAction } from "../StoryBActions";
import { openInfoDialogAction } from "../../infoDialog/InfoDialogActions";
import { IAppState } from "src/app/AppReducer";

interface IBoyEContainerProps extends IBoyEStateProps {
  dispatch: Dispatch;
}

interface IBoyEStateProps {
  isShowingInfoDialog: boolean;
}

const mapStateToProps = (state: IAppState): IBoyEStateProps => ({
  isShowingInfoDialog: state.infoDialogState.isShowing
});

class BoyEContainer extends React.Component<IBoyEContainerProps> {
  constructor(props: IBoyEContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <BoyE handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonDAction(true));
    this.props.dispatch(openInfoDialogAction());
  }
}

const ConnectedBoyE = connect(mapStateToProps)(BoyEContainer);

export default ConnectedBoyE;
