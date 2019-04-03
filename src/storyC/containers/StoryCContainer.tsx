import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryC from "../components/StoryC";
import {
  setIsShowPatternJAction,
  setIsShowDialogKAction
} from "../StoryCActions";
import ConnectedInfoDialogB from "src/infoDialogB/containers/InfoDialogBContainer";
import ConnectedAdventureStory from "src/adventureStory/containers/AdventureStoryContainer";

interface IStoryCContainerProps extends IStoryCStateProps {
  dispatch: Dispatch;
}

interface IStoryCStateProps {
  isShowDialogK: boolean;
  isShowButtonE: boolean;
}

const mapStateToProps = (state: IAppState): IStoryCStateProps => ({
  isShowDialogK: state.storyCState.isShowDialogK,
  isShowButtonE: state.storyCState.isShowButtonE
});

class StoryCContainer extends React.Component<IStoryCContainerProps> {
  constructor(props: IStoryCContainerProps) {
    super(props);
  }

  public componentDidMount() {
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

  public render() {
    return (
      <>
        <StoryC
          isShowDialogK={this.props.isShowDialogK}
          isShowButtonE={this.props.isShowButtonE}
        />
        <ConnectedInfoDialogB />
        <ConnectedAdventureStory />
      </>
    );
  }
}

const ConnectedStoryC = connect(mapStateToProps)(StoryCContainer);

export default ConnectedStoryC;
