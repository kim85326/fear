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
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

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
    this.closeQuestionB = this.closeQuestionB.bind(this);
  }

  public render() {
    return (
      <div className="questionB">
        {this.props.isShowButtonF ? (
          <div className="questionB-mask" onClick={this.closeQuestionB} />
        ) : null}
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

  private closeQuestionB() {
    this.props.dispatch(setIsShowButtonFAction(false));
    this.props.dispatch(setIsShowButtonGAction(false));
  }

  private handleClick(answer: boolean) {
    this.props.dispatch(setIsShowButtonFAction(false));
    this.props.dispatch(setIsShowButtonGAction(false));
    this.props.dispatch(setAnswerBAction(answer));
    this.props.dispatch(setPageAction(Page.storyE));
  }
}

const ConnectedQuestionB = connect(mapStateToProps)(QuestionBContainer);

export default ConnectedQuestionB;
