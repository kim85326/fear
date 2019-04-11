import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { closeOriginalPaintingDialogAction } from "../OriginalPaintingDialogActions";
import OriginalPaintingDialog from "../components/OriginalPaintingDialog";

interface IOriginalPaintingDialogContainerProps
  extends IOriginalPaintingDialogStateProps {
  dispatch: Dispatch;
}

interface IOriginalPaintingDialogStateProps {
  isShow: boolean;
}

const mapStateToProps = (
  state: IAppState
): IOriginalPaintingDialogStateProps => ({
  isShow: state.originalPaintingDialogState.isShow
});

class OriginalPaintingDialogContainer extends React.Component<
  IOriginalPaintingDialogContainerProps
> {
  constructor(props: IOriginalPaintingDialogContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <OriginalPaintingDialog
        isShow={this.props.isShow}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(closeOriginalPaintingDialogAction());
  }
}

const ConnectedOriginalPaintingDialog = connect(mapStateToProps)(
  OriginalPaintingDialogContainer
);

export default ConnectedOriginalPaintingDialog;
