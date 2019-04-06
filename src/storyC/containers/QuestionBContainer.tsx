import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonF from "../components/ButtonF";
import ButtonG from "../components/ButtonG";
import { setAnswerBAction } from "src/answer/AnswersAction";
import {
  setIsShowButtonFAction,
  setIsShowButtonGAction
} from "../StoryCActions";

interface IQuestionBContainerProps extends IQuestionBStateProps {
  dispatch: Dispatch;
}

interface IQuestionBStateProps {
  isShowButtonF: boolean;
  isShowButtonG: boolean;
}

const mapStateToProps = (state: IAppState): IQuestionBStateProps => ({
  isShowButtonF: state.storyCState.isShowButtonF,
  isShowButtonG: state.storyCState.isShowButtonG
});

class QuestionBContainer extends React.Component<IQuestionBContainerProps> {
  constructor(props: IQuestionBContainerProps) {
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

const ConnectedQuestionB = connect(mapStateToProps)(QuestionBContainer);

export default ConnectedQuestionB;
