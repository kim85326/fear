import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import Ending from "../components/Ending";
import {
  setIsShowButtonJAction,
  setIsShowButtonKAction
} from "../EndingActions";

interface IEndingContainerProps extends IEndingStateProps {
  dispatch: Dispatch;
}

interface IEndingStateProps {
  isShowButtonJ: boolean;
  answerA: boolean | null;
  answerB: boolean | null;
  answerC: boolean | null;
}

const mapStateToProps = (state: IAppState): IEndingStateProps => ({
  isShowButtonJ: state.endingState.isShowButtonJ,
  answerA: state.answersState.answerA,
  answerB: state.answersState.answerB,
  answerC: state.answersState.answerC
});

class EndingContainer extends React.Component<IEndingContainerProps> {
  constructor(props: IEndingContainerProps) {
    super(props);
  }

  public componentDidMount() {
    // 3 秒後顯示按鈕J與按鈕K
    setTimeout(() => {
      this.props.dispatch(setIsShowButtonJAction(true));
      this.props.dispatch(setIsShowButtonKAction(true));
    }, 3000);
  }

  public render() {
    return <Ending finalAnswer={this.getFinalAnswer()} />;
  }

  private getFinalAnswer(): string {
    const { answerA, answerB, answerC } = this.props;
    if (!answerA && !answerC) {
      return "hope";
    }

    if ((!answerA && answerC) || (answerA && !answerB)) {
      return "friend";
    }

    
    return "blue";
  }
}

const ConnectedEnding = connect(mapStateToProps)(EndingContainer);

export default ConnectedEnding;
