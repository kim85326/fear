import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import InfoDialogC from "../components/InfoDialogC";
import {
  closeInfoDialogCAction,
  closingInfoDialogCAction,
  openingInfoDialogCAction
} from "../InfoDialogCActions";

interface IInfoDialogCContainerProps extends IInfoDialogCStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogCStateProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogCStateProps => ({
  isShow: state.infoDialogCState.isShow,
  isShowing: state.infoDialogCState.isShowing,
  isHiding: state.infoDialogCState.isHiding
});

class InfoDialogCContainer extends React.Component<IInfoDialogCContainerProps> {
  constructor(props: IInfoDialogCContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IInfoDialogCContainerProps) {
    if (nextProps.isShow && !this.props.isShow) {
      this.props.dispatch(openingInfoDialogCAction());
    }

    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeInfoDialogCAction());
      }, 1000);
    }
  }

  public render() {
    return (
      <InfoDialogC
        isShow={this.props.isShow}
        isShowing={this.props.isShowing}
        isHiding={this.props.isHiding}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closingInfoDialogCAction());
  }
}

const ConnectedInfoDialogC = connect(mapStateToProps)(InfoDialogCContainer);

export default ConnectedInfoDialogC;
