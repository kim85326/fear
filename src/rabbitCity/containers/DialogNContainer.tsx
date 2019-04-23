import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import DialogN from "../components/DialogN";

interface IDialogNContainerProps extends IDialogNStateProps {
  dispatch: Dispatch;
}

interface IDialogNStateProps {
  isShowDialogN: boolean;
}

const mapStateToProps = (state: IAppState): IDialogNStateProps => ({
  isShowDialogN: state.rabbitCityState.isShowDialogN
});

class DialogNContainer extends React.Component<IDialogNContainerProps> {
  constructor(props: IDialogNContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <DialogN
        isShowDialog={this.props.isShowDialogN}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    console.log("顯示關於我們");
  }
}

const ConnectedDialogN = connect(mapStateToProps)(DialogNContainer);

export default ConnectedDialogN;
