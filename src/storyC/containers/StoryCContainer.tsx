import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryC from "../components/StoryC";
import {
  setIsStoryCLoadingAction,
  setIsShowPatternJAction,
  setIsShowDialogKAction
} from "../StoryCActions";
import backgroundImage from "../static/storyC_background.png";
import ConnectedInfoDialogB from "src/infoDialogB/containers/InfoDialogBContainer";

interface IStoryCContainerProps extends IStoryCStateProps {
  dispatch: Dispatch;
}

interface IStoryCStateProps {
  isLoading: boolean;
  isShowDialogK: boolean;
  isShowPatternJ: boolean;
  isShowButtonE: boolean;
}

const mapStateToProps = (state: IAppState): IStoryCStateProps => ({
  isLoading: state.storyCState.isLoading,
  isShowDialogK: state.storyCState.isShowDialogK,
  isShowPatternJ: state.storyCState.isShowPatternJ,
  isShowButtonE: state.storyCState.isShowButtonE
});

class StoryCContainer extends React.Component<IStoryCContainerProps> {
  private image = new Image();

  constructor(props: IStoryCContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IStoryCContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      // 顯示對話框 K
      setTimeout(() => {
        this.props.dispatch(setIsShowDialogKAction(true));
      }, 1000);

      // 3 秒後不顯示對話框 K
      setTimeout(() => {
        this.props.dispatch(setIsShowDialogKAction(false));
      }, 3000);

      // 4 秒後顯示圖案 F
      setTimeout(() => {
        this.props.dispatch(setIsShowPatternJAction(true));
      }, 4000);
    }
  }

  public render() {
    return this.props.isLoading ? (
      <div>loading...</div>
    ) : (
      <>
        <StoryC
          isLoading={this.props.isLoading}
          isShowDialogK={this.props.isShowDialogK}
          isShowPatternJ={this.props.isShowPatternJ}
          isShowButtonE={this.props.isShowButtonE}
        />
        <ConnectedInfoDialogB />
      </>
    );
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsStoryCLoadingAction(false));
  }
}

const ConnectedStoryC = connect(mapStateToProps)(StoryCContainer);

export default ConnectedStoryC;
