import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import {
  setIsShowDialogGAction,
  setIsShowDialogHAction,
  setIsShowDialogIAction,
  setIsShowButtonBAction,
  setIsShowButtonCAction
} from "../StoryAAction";
import ReplyRabbit from "../components/ReplyRabbit";

interface IReplyRabbitContainerProps extends IReplyRabbitStateProps {
  dispatch: Dispatch;
}

interface IReplyRabbitStateProps {
  isShowReplyRabbit: boolean;
}

const mapStateToProps = (state: IAppState): IReplyRabbitStateProps => ({
  isShowReplyRabbit: state.storyAState.isShowReplyRabbit
});

class ReplyRabbitContainer extends React.Component<IReplyRabbitContainerProps> {
  constructor(props: IReplyRabbitContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ReplyRabbit
        handleClick={this.handleClick}
        isShowReplyRabbit={this.props.isShowReplyRabbit}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setIsShowDialogGAction(false));
    this.props.dispatch(setIsShowDialogHAction(false));
    this.props.dispatch(setIsShowDialogIAction(false));

    // 等隱藏對話框 G、H、I 的動畫結束 ( 0.8 秒 ) 後 0.5 秒，才顯示按鈕 B
    setTimeout(() => {
      this.props.dispatch(setIsShowButtonBAction(true));
    }, 1300);

    // 等隱藏對話框 G、H、I 的動畫結束 ( 0.8 秒 ) 後 1 秒，才顯示按鈕 C
    setTimeout(() => {
      this.props.dispatch(setIsShowButtonCAction(true));
    }, 1800);
  }
}

const ConnectedReplyRabbit = connect(mapStateToProps)(ReplyRabbitContainer);

export default ConnectedReplyRabbit;
