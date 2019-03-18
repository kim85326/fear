import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import FearCity from "../components/FearCity";
import backgroundImage from "../static/fear_city_background.png";
import {
  setIsFearCityLoadingAction,
  setIsShowDialogCAction,
  setIsShowButtonAAction
} from "../FearCityAction";
import ConnectedLeadingStoryDialog from "src/leadingStoryDialog/containers/LeadingStoryDialogContainer";

interface IFearCityContainerProps extends IFearCityStateProps {
  dispatch: Dispatch;
}

interface IFearCityStateProps {
  isLoading: boolean;
  isShowLeadingStoryDialog: boolean;
  isShowDialogC: boolean;
}

const mapStateToProps = (state: IAppState): IFearCityStateProps => ({
  isLoading: state.fearCityState.isLoading,
  isShowLeadingStoryDialog: state.leadingStoryDialogState.isShow,
  isShowDialogC: state.fearCityState.isShowDialogC
});

class FearCityContainer extends React.Component<IFearCityContainerProps> {
  private image = new Image();

  constructor(props: IFearCityContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.showDialogC = this.showDialogC.bind(this);
    this.hideDialogC = this.hideDialogC.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IFearCityContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      this.handleImageLoaded();
    }

    // 關閉前導故事對話框後
    if (
      !this.props.isShowLeadingStoryDialog &&
      prevProps.isShowLeadingStoryDialog
    ) {
      // 顯示對話框 C
      this.showDialogC();

      // 3 秒後不顯示對話框 C、顯示按鈕 A
      setTimeout(() => {
        this.hideDialogC();
        this.props.dispatch(setIsShowButtonAAction(true));
      }, 3000);
    }
  }

  public render() {
    return this.props.isLoading ? (
      <div>loading...</div>
    ) : (
      <>
        <ConnectedLeadingStoryDialog />
        <FearCity
          isShowDialogC={this.props.isShowDialogC}
          showDialogC={this.showDialogC}
          hideDialogC={this.hideDialogC}
        />
      </>
    );
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsFearCityLoadingAction(false));
  }

  private showDialogC() {
    this.props.dispatch(setIsShowDialogCAction(true));
  }

  private hideDialogC() {
    this.props.dispatch(setIsShowDialogCAction(false));
  }
}

const ConnectedFearCity = connect(mapStateToProps)(FearCityContainer);

export default ConnectedFearCity;
