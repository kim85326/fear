import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import SubmitAnimation from "../components/SubmitAnimation";

interface ISubmitAnimationContainerProps extends ISubmitAnimationStateProps {
  dispatch: Dispatch;
}

interface ISubmitAnimationStateProps {
  isSubmitted: boolean;
}

const mapStateToProps = (state: IAppState): ISubmitAnimationStateProps => ({
  isSubmitted: state.submitFearState.isSubmitted
});

class SubmitAnimationContainer extends React.Component<
  ISubmitAnimationContainerProps
> {
  constructor(props: ISubmitAnimationContainerProps) {
    super(props);
  }

  public render() {
    return <SubmitAnimation isShow={this.props.isSubmitted} />;
  }
}

const ConnectedSubmitAnimation = connect(mapStateToProps)(
  SubmitAnimationContainer
);

export default ConnectedSubmitAnimation;
