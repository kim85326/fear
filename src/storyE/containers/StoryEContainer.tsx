import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryE from "../components/StoryE";
import {
  setIsStoryELoadingAction,
  setIsShowPatternFOfStoryEAction
} from "../StoryEAction";
import backgroundImage from "../static/storyE_background.png";
import { showAllVirusAction } from "src/virus/virusAction";
import ConnectedStoryDDialog from "src/StoryDDialog/containers/StoryDDialogContainer";
import ConnectedInfoDialogC from "src/infoDialogC/containers/InfoDialogCContainer";

interface IStoryEContainerProps extends IStoryEStateProps {
  dispatch: Dispatch;
}

interface IStoryEStateProps {
  isLoading: boolean;
  isShowStoryDDialog: boolean;
}

const mapStateToProps = (state: IAppState): IStoryEStateProps => ({
  isLoading: state.storyEState.isLoading,
  isShowStoryDDialog: state.storyDDialogState.isShow
});

class StoryEContainer extends React.Component<IStoryEContainerProps> {
  private image = new Image();

  constructor(props: IStoryEContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
    this.props.dispatch(showAllVirusAction());
  }

  public componentDidUpdate(prevProps: IStoryEContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      this.handleImageLoaded();
    }

    // 關閉故事 D 對話框後
    if (!this.props.isShowStoryDDialog && prevProps.isShowStoryDDialog) {
      this.props.dispatch(setIsShowPatternFOfStoryEAction(true));
    }
  }

  public render() {
    return this.props.isLoading ? (
      <div>loading...</div>
    ) : (
      <>
        <StoryE isLoading={this.props.isLoading} />
        <ConnectedStoryDDialog />
        <ConnectedInfoDialogC />
      </>
    );
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsStoryELoadingAction(false));
  }
}

const ConnectedStoryE = connect(mapStateToProps)(StoryEContainer);

export default ConnectedStoryE;
