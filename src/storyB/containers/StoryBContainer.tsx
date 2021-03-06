import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryB from "../components/StoryB";
import {
  setIsStoryBLoadingAction,
  setIsShowPatternFAction,
  setIsShowDialogJAction
} from "../StoryBActions";
import backgroundImage from "../static/storyB_background.png";
import ConnectedInfoDialogA from "src/infoDialogA/containers/InfoDialogAContainer";
import ConnectedOriginalPaintingDialog from "src/originalPaintingDialog/containers/OriginalPaintingDialogContainer";
import Loading from "src/common/loading/components/Loading";

interface IStoryBContainerProps extends IStoryBStateProps {
  dispatch: Dispatch;
}

interface IStoryBStateProps {
  isLoading: boolean;
  isShowDialogJ: boolean;
}

const mapStateToProps = (state: IAppState): IStoryBStateProps => ({
  isLoading: state.storyBState.isLoading,
  isShowDialogJ: state.storyBState.isShowDialogJ
});

class StoryBContainer extends React.Component<IStoryBContainerProps> {
  private image = new Image();

  constructor(props: IStoryBContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IStoryBContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      // 顯示對話框 J
      setTimeout(() => {
        this.props.dispatch(setIsShowDialogJAction(true));
      }, 1000);

      // 3 秒後不顯示對話框 J
      setTimeout(() => {
        this.props.dispatch(setIsShowDialogJAction(false));
      }, 4000);

      // 4 秒後顯示圖案 F
      setTimeout(() => {
        this.props.dispatch(setIsShowPatternFAction(true));
      }, 5000);
    }
  }

  public render() {
    return this.props.isLoading ? (
      <Loading />
    ) : (
      <>
        <StoryB
          isLoading={this.props.isLoading}
          isShowDialogJ={this.props.isShowDialogJ}
        />
        <ConnectedInfoDialogA />
        <ConnectedOriginalPaintingDialog />
      </>
    );
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsStoryBLoadingAction(false));
  }
}

const ConnectedStoryB = connect(mapStateToProps)(StoryBContainer);

export default ConnectedStoryB;
