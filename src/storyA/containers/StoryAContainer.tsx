import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryA from "../components/StoryA";
import {
  setIsStoryALoadingGAction,
  setIsShowDialogGAction,
  setIsShowDialogHAction,
  setIsShowDialogIAction,
  setIsShowReplyRabbitAction
} from "../StoryAAction";

interface IStoryAContainerProps extends IStoryAStateProps {
  dispatch: Dispatch;
}

interface IStoryAStateProps {
  isLoading: boolean;
  isShowDialogG: boolean;
  isShowDialogH: boolean;
  isShowDialogI: boolean;
}

const mapStateToProps = (state: IAppState): IStoryAStateProps => ({
  isLoading: state.storyAState.isLoading,
  isShowDialogG: state.storyAState.isShowDialogG,
  isShowDialogH: state.storyAState.isShowDialogH,
  isShowDialogI: state.storyAState.isShowDialogI
});

class StoryAContainer extends React.Component<IStoryAContainerProps> {
  constructor(props: IStoryAContainerProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.dispatch(setIsStoryALoadingGAction(true));

    // 2 秒後顯示對話框 G
    setTimeout(() => {
      this.props.dispatch(setIsShowDialogGAction(true));
    }, 2000);

    // 4 秒後顯示對話框 H
    setTimeout(() => {
      this.props.dispatch(setIsShowDialogHAction(true));
    }, 4000);

    // 6 秒後顯示對話框 I
    setTimeout(() => {
      this.props.dispatch(setIsShowDialogIAction(true));
    }, 6000);

    // 6.5 秒後顯示回覆兔兔
    setTimeout(() => {
      this.props.dispatch(setIsShowReplyRabbitAction(true));
    }, 6500);
  }

  public render() {
    return (
      <StoryA
        isLoading={this.props.isLoading}
        isShowDialogG={this.props.isShowDialogG}
        isShowDialogH={this.props.isShowDialogH}
        isShowDialogI={this.props.isShowDialogI}
      />
    );
  }
}

const ConnectedStoryA = connect(mapStateToProps)(StoryAContainer);

export default ConnectedStoryA;
