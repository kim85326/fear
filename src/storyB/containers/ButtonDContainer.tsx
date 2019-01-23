import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonD from "../components/ButtonD";

interface IButtonDContainerProps extends IButtonDStateProps {
  dispatch: Dispatch;
}

interface IButtonDStateProps {
  isShowButtonD: boolean;
}

const mapStateToProps = (state: IAppState): IButtonDStateProps => ({
  isShowButtonD: state.storyBState.isShowButtonD
});

class ButtonDContainer extends React.Component<IButtonDContainerProps> {
  constructor(props: IButtonDContainerProps) {
    super(props);
  }

  public render() {
    return <ButtonD isShowButton={this.props.isShowButtonD} />;
  }
}

const ConnectedButtonD = connect(mapStateToProps)(ButtonDContainer);

export default ConnectedButtonD;
