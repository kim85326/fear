import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonB from "../components/ButtonB";
import ButtonC from "../components/ButtonC";
import {
  setIsShowButtonBAction,
  setIsShowButtonCAction
} from "../StoryAAction";
import { setAnswerAAction } from "src/answer/AnswersAction";

interface IButtonBCContainerProps extends IButtonBCStateProps {
  dispatch: Dispatch;
}

interface IButtonBCStateProps {
  isShowButtonB: boolean;
  isShowButtonC: boolean;
}

const mapStateToProps = (state: IAppState): IButtonBCStateProps => ({
  isShowButtonB: state.storyAState.isShowButtonB,
  isShowButtonC: state.storyAState.isShowButtonC
});

class ButtonBCContainer extends React.Component<IButtonBCContainerProps> {
  constructor(props: IButtonBCContainerProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <ButtonB
          handleClick={this.handleClick.bind(this, true)}
          isShowButton={this.props.isShowButtonB}
        />
        <ButtonC
          handleClick={this.handleClick.bind(this, false)}
          isShowButton={this.props.isShowButtonC}
        />
      </>
    );
  }

  private handleClick(answer: boolean) {
    this.props.dispatch(setIsShowButtonBAction(false));
    this.props.dispatch(setIsShowButtonCAction(false));
    this.props.dispatch(setAnswerAAction(answer));
  }
}

const ConnectedButtonBC = connect(mapStateToProps)(ButtonBCContainer);

export default ConnectedButtonBC;
