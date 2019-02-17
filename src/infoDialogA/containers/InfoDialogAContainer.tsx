import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import InfoDialogA from "../components/InfoDialogA";
import {
  closeInfoDialogAAction,
  closingInfoDialogAAction,
  openingInfoDialogAAction
} from "../InfoDialogAActions";

interface IInfoDialogAContainerProps extends IInfoDialogAStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogAStateProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogAStateProps => ({
  isShow: state.infoDialogAState.isShow,
  isShowing: state.infoDialogAState.isShowing,
  isHiding: state.infoDialogAState.isHiding
});

class InfoDialogAContainer extends React.Component<IInfoDialogAContainerProps> {
  constructor(props: IInfoDialogAContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IInfoDialogAContainerProps) {
    if (nextProps.isShow && !this.props.isShow) {
      this.props.dispatch(openingInfoDialogAAction());
    }

    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeInfoDialogAAction());
      }, 1000);
    }
  }

  public render() {
    return (
      <InfoDialogA
        isShow={this.props.isShow}
        isShowing={this.props.isShowing}
        isHiding={this.props.isHiding}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closingInfoDialogAAction());
  }
}

const ConnectedInfoDialogA = connect(mapStateToProps)(InfoDialogAContainer);

export default ConnectedInfoDialogA;
