import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonK from "../components/ButtonK";

interface IButtonKContainerProps extends IButtonKStateProps {
  dispatch: Dispatch;
}

interface IButtonKStateProps {
  isShowButtonK: boolean;
}

const mapStateToProps = (state: IAppState): IButtonKStateProps => ({
  isShowButtonK: state.endingState.isShowButtonK
});

class ButtonKContainer extends React.Component<IButtonKContainerProps> {
  constructor(props: IButtonKContainerProps) {
    super(props);
  }

  public render() {
    return <ButtonK isShowButton={this.props.isShowButtonK} />;
  }
}

const ConnectedButtonK = connect(mapStateToProps)(ButtonKContainer);

export default ConnectedButtonK;
