import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import SubmitAnimation from "../components/SubmitAnimation";

interface ISubmitAnimationContainerProps extends ISubmitAnimationStateProps {
  dispatch: Dispatch;
}

interface ISubmitAnimationStateProps {
  isShowSubmitAnimation: boolean;
}

const mapStateToProps = (state: IAppState): ISubmitAnimationStateProps => ({
  isShowSubmitAnimation: state.submitFearState.isShowSubmitAnimation
});

class SubmitAnimationContainer extends React.Component<
  ISubmitAnimationContainerProps
> {
  constructor(props: ISubmitAnimationContainerProps) {
    super(props);
  }

  public render() {
    return <SubmitAnimation isShow={this.props.isShowSubmitAnimation} />;
  }
}

const ConnectedSubmitAnimation = connect(mapStateToProps)(
  SubmitAnimationContainer
);

export default ConnectedSubmitAnimation;
