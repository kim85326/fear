import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonA from "../components/ButtonA";

interface IButtonAContainerProps extends IButtonAStateProps {
  dispatch: Dispatch;
}

interface IButtonAStateProps {
  isShowButtonA: boolean;
}

const mapStateToProps = (state: IAppState): IButtonAStateProps => ({
  isShowButtonA: state.fearCityState.isShowButtonA
});

class ButtonAContainer extends React.Component<IButtonAContainerProps> {
  constructor(props: IButtonAContainerProps) {
    super(props);
  }

  public render() {
    return <ButtonA isShowButton={this.props.isShowButtonA} />;
  }
}

const ConnectedButtonA = connect(mapStateToProps)(ButtonAContainer);

export default ConnectedButtonA;
