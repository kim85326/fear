import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import Ending from "../components/Ending";
import {
  setIsEndingLoadingAction,
  setIsShowButtonJAction,
  setIsShowButtonKAction
} from "../EndingActions";
import endingContentImage from "../static/ending_1.png";

interface IEndingContainerProps extends IEndingStateProps {
  dispatch: Dispatch;
}

interface IEndingStateProps {
  isLoading: boolean;
  isShowButtonJ: boolean;
  answerA: boolean | null;
  answerB: boolean | null;
  answerC: boolean | null;
}

const mapStateToProps = (state: IAppState): IEndingStateProps => ({
  isLoading: state.endingState.isLoading,
  isShowButtonJ: state.endingState.isShowButtonJ,
  answerA: state.answersState.answerA,
  answerB: state.answersState.answerB,
  answerC: state.answersState.answerC
});

class EndingContainer extends React.Component<IEndingContainerProps> {
  private image = new Image();

  constructor(props: IEndingContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = endingContentImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IEndingContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      // 3 秒後顯示按鈕J與按鈕K
      setTimeout(() => {
        this.props.dispatch(setIsShowButtonJAction(true));
        this.props.dispatch(setIsShowButtonKAction(true));
      }, 3000);
    }
  }

  public render() {
    return this.props.isLoading ? (
      <div>loading...</div>
    ) : (
      <Ending finalAnswer={this.getFinalAnswer()} />
    );
  }

  private getFinalAnswer(): string {
    const { answerA, answerB, answerC } = this.props;
    if (!answerA && !answerC) {
      return "white";
    }

    if ((!answerA && answerC) || (answerA && !answerB)) {
      return "red";
    }

    return "purple";
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsEndingLoadingAction(false));
  }
}

const ConnectedEnding = connect(mapStateToProps)(EndingContainer);

export default ConnectedEnding;
