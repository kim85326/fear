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
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IQuestionAContainerProps extends IQuestionAStateProps {
  dispatch: Dispatch;
}

interface IQuestionAStateProps {
  isShowButtonB: boolean;
  isShowButtonC: boolean;
}

const mapStateToProps = (state: IAppState): IQuestionAStateProps => ({
  isShowButtonB: state.storyAState.isShowButtonB,
  isShowButtonC: state.storyAState.isShowButtonC
});

class QuestionAContainer extends React.Component<IQuestionAContainerProps> {
  constructor(props: IQuestionAContainerProps) {
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
    this.props.dispatch(setPageAction(Page.storyB));
  }
}

const ConnectedQuestionA = connect(mapStateToProps)(QuestionAContainer);

export default ConnectedQuestionA;
