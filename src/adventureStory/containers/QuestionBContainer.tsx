import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonF from "../components/ButtonF";
import ButtonG from "../components/ButtonG";
import {
  setIsShowButtonFAction,
  setIsShowButtonGAction
} from "../AdventureStoryActions";
import { setAnswerBAction } from "src/answer/AnswersAction";

interface IQuestionCContainerProps extends IQuestionCStateProps {
  dispatch: Dispatch;
}

interface IQuestionCStateProps {
  isShowButtonF: boolean;
  isShowButtonG: boolean;
}

const mapStateToProps = (state: IAppState): IQuestionCStateProps => ({
  isShowButtonF: state.adventureStoryState.isShowButtonF,
  isShowButtonG: state.adventureStoryState.isShowButtonG
});

class QuestionCContainer extends React.Component<IQuestionCContainerProps> {
  constructor(props: IQuestionCContainerProps) {
    super(props);
  }

  public render() {
    return (
      <div className="questionB">
        {this.props.isShowButtonF ? <div className="questionB-mask" /> : null}
        <ButtonF
          handleClick={this.handleClick.bind(this, true)}
          isShowButton={this.props.isShowButtonF}
        />
        <ButtonG
          handleClick={this.handleClick.bind(this, false)}
          isShowButton={this.props.isShowButtonG}
        />
      </div>
    );
  }

  private handleClick(answer: boolean) {
    this.props.dispatch(setIsShowButtonFAction(false));
    this.props.dispatch(setIsShowButtonGAction(false));
    this.props.dispatch(setAnswerBAction(answer));
  }
}

const ConnectedQuestionC = connect(mapStateToProps)(QuestionCContainer);

export default ConnectedQuestionC;
