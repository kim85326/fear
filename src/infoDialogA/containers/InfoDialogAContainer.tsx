import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { closeInfoDialogAAction } from "../InfoDialogAActions";
import InfoDialog from "src/common/infoDialog/components/InfoDialog";
import infoDialogABackground from "../static/infoDialogA_background.png";
import InfoDialogAContent from "../components/InfoDialogAContent";

interface IInfoDialogAContainerProps extends IInfoDialogAStateProps {
  dispatch: Dispatch;
}

interface IInfoDialogAStateProps {
  isShow: boolean;
}

const mapStateToProps = (state: IAppState): IInfoDialogAStateProps => ({
  isShow: state.infoDialogAState.isShow
});

class InfoDialogAContainer extends React.Component<IInfoDialogAContainerProps> {
  constructor(props: IInfoDialogAContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <InfoDialog
        isShow={this.props.isShow}
        handleClick={this.handleClick}
        backgroundColor={"#fbf7ec"}
        backgroundImage={infoDialogABackground}
      >
        <InfoDialogAContent />
      </InfoDialog>
    );
  }

  private handleClick() {
    this.props.dispatch(closeInfoDialogAAction());
  }
}

const ConnectedInfoDialogA = connect(mapStateToProps)(InfoDialogAContainer);

export default ConnectedInfoDialogA;
