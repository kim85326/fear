import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import {
  closeOriginalPaintingDialogAction,
  closingOriginalPaintingDialogAction,
  openingOriginalPaintingDialogAction
} from "../OriginalPaintingDialogActions";
import OriginalPaintingDialog from "../components/OriginalPaintingDialog";

interface IOriginalPaintingDialogContainerProps
  extends IOriginalPaintingDialogStateProps {
  dispatch: Dispatch;
}

interface IOriginalPaintingDialogStateProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
}

const mapStateToProps = (
  state: IAppState
): IOriginalPaintingDialogStateProps => ({
  isShow: state.originalPaintingDialogState.isShow,
  isShowing: state.originalPaintingDialogState.isShowing,
  isHiding: state.originalPaintingDialogState.isHiding
});

class OriginalPaintingDialogContainer extends React.Component<
  IOriginalPaintingDialogContainerProps
> {
  constructor(props: IOriginalPaintingDialogContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(
    nextProps: IOriginalPaintingDialogContainerProps
  ) {
    if (nextProps.isShow && !this.props.isShow) {
      this.props.dispatch(openingOriginalPaintingDialogAction());
    }

    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeOriginalPaintingDialogAction());
      }, 1000);
    }
  }

  public render() {
    return (
      <OriginalPaintingDialog
        isShow={this.props.isShow}
        isShowing={this.props.isShowing}
        isHiding={this.props.isHiding}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closingOriginalPaintingDialogAction());
  }
}

const ConnectedOriginalPaintingDialog = connect(mapStateToProps)(
  OriginalPaintingDialogContainer
);

export default ConnectedOriginalPaintingDialog;
