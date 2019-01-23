import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import InfoDialog from "../components/InfoDialog";
import {
  closeInfoDialogAction,
  closingInfoDialogAction,
  openingInfoDialogAction
} from "../InfoDialogActions";

interface IStoryBContainerProps extends IStoryBStateProps {
  dispatch: Dispatch;
}

interface IStoryBStateProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const mapStateToProps = (state: IAppState): IStoryBStateProps => ({
  isShow: state.infoDialogState.isShow,
  isShowing: state.infoDialogState.isShowing,
  isHiding: state.infoDialogState.isHiding
});

class InfoDialogContainer extends React.Component<IStoryBContainerProps> {
  constructor(props: IStoryBContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IStoryBContainerProps) {
    if (nextProps.isShow && !this.props.isShow) {
      this.props.dispatch(openingInfoDialogAction());
    }

    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeInfoDialogAction());
      }, 1000);
    }
  }

  public render() {
    return (
      <InfoDialog
        isShow={this.props.isShow}
        isShowing={this.props.isShowing}
        isHiding={this.props.isHiding}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closingInfoDialogAction());
  }
}

const ConnectedInfoDialog = connect(mapStateToProps)(InfoDialogContainer);

export default ConnectedInfoDialog;
