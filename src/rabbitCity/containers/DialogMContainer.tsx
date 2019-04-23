import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import DialogM from "../components/DialogM";

interface IDialogMContainerProps extends IDialogMStateProps {
  dispatch: Dispatch;
}

interface IDialogMStateProps {
  isShowDialogM: boolean;
}

const mapStateToProps = (state: IAppState): IDialogMStateProps => ({
  isShowDialogM: state.rabbitCityState.isShowDialogM
});

class DialogMContainer extends React.Component<IDialogMContainerProps> {
  constructor(props: IDialogMContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <DialogM
        isShowDialog={this.props.isShowDialogM}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    console.log("顯示怕怕資訊");
  }
}

const ConnectedDialogM = connect(mapStateToProps)(DialogMContainer);

export default ConnectedDialogM;
