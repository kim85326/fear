import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import StoryDDialog from "../components/StoryDDialog";
import { closeStoryDDialogAction } from "../StoryDDialogAction";
import ConnectedVirusGroup from "src/virus/containers/VirusGroupContainer";
import { showAllVirusAction } from "src/virus/virusAction";

interface IStoryDContainerProps extends IStoryDStateProps {
  dispatch: Dispatch;
}

interface IStoryDStateProps {
  isShow: boolean;
}

const mapStateToProps = (state: IAppState): IStoryDStateProps => ({
  isShow: state.storyDDialogState.isShow
});

class StoryDDialogContainer extends React.Component<
  IStoryDContainerProps
> {
  constructor(props: IStoryDContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidMount() {
    this.props.dispatch(showAllVirusAction());
  }

  public render() {
    if (this.props.isShow) {
      return (
        <>
          <ConnectedVirusGroup />
          <StoryDDialog handleClick={this.handleClick} />
        </>
      );
    }
    return null;
  }

  private handleClick() {
    this.props.dispatch(closeStoryDDialogAction());
  }
}

const ConnectedStoryDDialog = connect(mapStateToProps)(
  StoryDDialogContainer
);

export default ConnectedStoryDDialog;
