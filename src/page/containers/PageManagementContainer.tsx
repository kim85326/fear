import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { Page } from "../constants/Page";
import Sound from "src/common/sound/components/Sound";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import ConnectedFearCity from "src/fearCity/containers/FearCityContainer";
import ConnectedStoryA from "src/storyA/containers/StoryAContainer";
import ConnectedStoryB from "src/storyB/containers/StoryBContainer";
import ConnectedStoryC from "src/storyC/containers/StoryCContainer";
import ConnectedStoryE from "src/storyE/containers/StoryEContainer";
import ConnectedEnding from "src/ending/containers/EndingContainer";
import ConnectedSubmitFear from "src/submitFear/containers/SubmitFearContainer";
import ConnectedHome from "src/home/containers/HomeContainer";

interface IPageManagementContainerProps extends IPageManagementStateProps {
  dispatch: Dispatch;
}

interface IPageManagementStateProps {
  page: Page;
}

const mapStateToProps = (state: IAppState): IPageManagementStateProps => ({
  page: state.pageManagementState.page
});

class PageManagementContainer extends React.Component<
  IPageManagementContainerProps
> {
  constructor(props: IPageManagementContainerProps) {
    super(props);
  }

  public render() {
    return (
      <div className={this.props.page}>
        <Sound />
        <ConnectedMenuWrapper />
        {this.getPage()}
      </div>
    );
  }

  private getPage() {
    switch (this.props.page) {
      case Page.fearCity:
        return <ConnectedFearCity />;
      case Page.storyA:
        return <ConnectedStoryA />;
      case Page.storyB:
        return <ConnectedStoryB />;
      case Page.storyC:
        return <ConnectedStoryC />;
      case Page.storyE:
        return <ConnectedStoryE />;
      case Page.ending:
        return <ConnectedEnding />;
      case Page.submitFear:
        return <ConnectedSubmitFear />;
      default:
        return <ConnectedHome />;
    }
  }
}

const ConnectedPageManagement = connect(mapStateToProps)(
  PageManagementContainer
);

export default ConnectedPageManagement;
