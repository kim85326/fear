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
import backgroundImage from "../static/storyA_background.png";
import Loading from "src/common/loading/components/Loading";

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
  private image = new Image();

  constructor(props: IStoryAContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IStoryAContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
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
  }

  public render() {
    return this.props.isLoading ? (
      <Loading />
    ) : (
      <StoryA
        isLoading={this.props.isLoading}
        isShowDialogG={this.props.isShowDialogG}
        isShowDialogH={this.props.isShowDialogH}
        isShowDialogI={this.props.isShowDialogI}
      />
    );
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsStoryALoadingGAction(false));
  }
}

const ConnectedStoryA = connect(mapStateToProps)(StoryAContainer);

export default ConnectedStoryA;
