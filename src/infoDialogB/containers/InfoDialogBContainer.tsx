import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import InfoDialogB from "../components/InfoDialogB";
import {
  closeInfoDialogBAction,
  closingInfoDialogBAction,
  openingInfoDialogBAction
} from "../InfoDialogBActions";

interface IInfoDialogBContainerProps extends IInfoDialogBStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogBStateProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogBStateProps => ({
  isShow: state.infoDialogBState.isShow,
  isShowing: state.infoDialogBState.isShowing,
  isHiding: state.infoDialogBState.isHiding
});

class InfoDialogBContainer extends React.Component<IInfoDialogBContainerProps> {
  constructor(props: IInfoDialogBContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IInfoDialogBContainerProps) {
    if (nextProps.isShow && !this.props.isShow) {
      this.props.dispatch(openingInfoDialogBAction());
    }

    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeInfoDialogBAction());
      }, 1000);
    }
  }

  public render() {
    return (
      <InfoDialogB
        isShow={this.props.isShow}
        isShowing={this.props.isShowing}
        isHiding={this.props.isHiding}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closingInfoDialogBAction());
  }
}

const ConnectedInfoDialogB = connect(mapStateToProps)(InfoDialogBContainer);

export default ConnectedInfoDialogB;
