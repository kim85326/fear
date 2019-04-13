import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { closeInfoDialogBAction } from "../InfoDialogBActions";
import InfoDialog from "src/common/infoDialog/components/InfoDialog";
import infoDialogBBackground from "../static/infoDialogB_background.png";
import InfoDialogBContent from "../components/InfoDialogBContent";

interface IInfoDialogBContainerProps extends IInfoDialogBStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogBStateProps {
  isShow: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogBStateProps => ({
  isShow: state.infoDialogBState.isShow
});

class InfoDialogBContainer extends React.Component<IInfoDialogBContainerProps> {
  constructor(props: IInfoDialogBContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <InfoDialog
        contentClassName={"info-dialogB-content"}
        isShow={this.props.isShow}
        handleClick={this.handleClick}
        backgroundColor={"#ffc6a5"}
        backgroundImage={infoDialogBBackground}
      >
        <InfoDialogBContent />
      </InfoDialog>
    );
  }

  private handleClick() {
    this.props.dispatch(closeInfoDialogBAction());
  }
}

const ConnectedInfoDialogB = connect(mapStateToProps)(InfoDialogBContainer);

export default ConnectedInfoDialogB;
