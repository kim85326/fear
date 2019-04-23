import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import DialogL from "../components/DialogL";

interface IDialogLContainerProps extends IDialogLStateProps {
  dispatch: Dispatch;
}

interface IDialogLStateProps {
  isShowDialogL: boolean;
}

const mapStateToProps = (state: IAppState): IDialogLStateProps => ({
  isShowDialogL: state.rabbitCityState.isShowDialogL
});

class DialogLContainer extends React.Component<IDialogLContainerProps> {
  constructor(props: IDialogLContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <DialogL
        isShowDialog={this.props.isShowDialogL}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    console.log("顯示圖書館");
  }
}

const ConnectedDialogL = connect(mapStateToProps)(DialogLContainer);

export default ConnectedDialogL;
