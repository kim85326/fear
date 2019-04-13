import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { closeInfoDialogCAction } from "../InfoDialogCActions";
import InfoDialog from "src/common/infoDialog/components/InfoDialog";
import infoDialogCBackground from "../static/infoDialogC_background.png";
import InfoDialogCContent from "../components/InfoDialogCContent";

interface IInfoDialogCContainerProps extends IInfoDialogCStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogCStateProps {
  isShow: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogCStateProps => ({
  isShow: state.infoDialogCState.isShow
});

class InfoDialogCContainer extends React.Component<IInfoDialogCContainerProps> {
  constructor(props: IInfoDialogCContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <InfoDialog
        contentClassName={"info-dialogC-content"}
        isShow={this.props.isShow}
        handleClick={this.handleClick}
        backgroundColor={"#c4e1e5"}
        backgroundImage={infoDialogCBackground}
      >
        <InfoDialogCContent />
      </InfoDialog>
    );
  }

  private handleClick() {
    this.props.dispatch(closeInfoDialogCAction());
  }
}

const ConnectedInfoDialogC = connect(mapStateToProps)(InfoDialogCContainer);

export default ConnectedInfoDialogC;
