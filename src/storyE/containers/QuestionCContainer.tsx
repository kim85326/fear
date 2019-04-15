import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonH from "../components/ButtonH";
import ButtonI from "../components/ButtonI";
import {
  setIsShowButtonHAction,
  setIsShowButtonIAction
} from "../StoryEAction";
import { setAnswerCAction } from "src/answer/AnswersAction";

interface IQuestionCContainerProps extends IQuestionCStateProps {
  dispatch: Dispatch;
}

interface IQuestionCStateProps {
  isShowButtonH: boolean;
  isShowButtonI: boolean;
}

const mapStateToProps = (state: IAppState): IQuestionCStateProps => ({
  isShowButtonH: state.storyEState.isShowButtonH,
  isShowButtonI: state.storyEState.isShowButtonI
});

class QuestionCContainer extends React.Component<IQuestionCContainerProps> {
  constructor(props: IQuestionCContainerProps) {
    super(props);
    this.closeQuestionC = this.closeQuestionC.bind(this);
  }

  public render() {
    return (
      <div className="questionC">
        {this.props.isShowButtonH ? (
          <div className="questionC-mask" onClick={this.closeQuestionC} />
        ) : null}
        <ButtonH
          handleClick={this.handleClick.bind(this, true)}
          isShowButton={this.props.isShowButtonH}
        />
        <ButtonI
          handleClick={this.handleClick.bind(this, false)}
          isShowButton={this.props.isShowButtonI}
        />
      </div>
    );
  }

  private closeQuestionC() {
    this.props.dispatch(setIsShowButtonHAction(false));
    this.props.dispatch(setIsShowButtonIAction(false));
  }

  private handleClick(answer: boolean) {
    this.props.dispatch(setIsShowButtonHAction(false));
    this.props.dispatch(setIsShowButtonIAction(false));
    this.props.dispatch(setAnswerCAction(answer));
  }
}

const ConnectedQuestionC = connect(mapStateToProps)(QuestionCContainer);

export default ConnectedQuestionC;
