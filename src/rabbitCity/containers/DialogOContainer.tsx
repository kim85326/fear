import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import DialogO from "../components/DialogO";

interface IDialogOContainerProps extends IDialogOStateProps {
  dispatch: Dispatch;
}

interface IDialogOStateProps {
  isShowDialogO: boolean;
}

const mapStateToProps = (state: IAppState): IDialogOStateProps => ({
  isShowDialogO: state.rabbitCityState.isShowDialogO
});

class DialogOContainer extends React.Component<IDialogOContainerProps> {
  constructor(props: IDialogOContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <DialogO
        isShowDialog={this.props.isShowDialogO}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    console.log("顯示救助站");
  }
}

const ConnectedDialogO = connect(mapStateToProps)(DialogOContainer);

export default ConnectedDialogO;
