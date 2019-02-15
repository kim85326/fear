import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import LeadingStoryDialog from "../components/LeadingStoryDialog";
import { closeLeadingStoryDialogAction } from "../LeadingStoryDialogAction";
import ConnectedVirusGroup from "src/virus/containers/VirusGroupContainer";

interface IStoryBContainerProps extends IStoryBStateProps {
  dispatch: Dispatch;
}

interface IStoryBStateProps {
  isShow: boolean;
}

const mapStateToProps = (state: IAppState): IStoryBStateProps => ({
  isShow: state.leadingStoryDialogState.isShow
});

class LeadingStoryDialogContainer extends React.Component<
  IStoryBContainerProps
> {
  constructor(props: IStoryBContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    if (this.props.isShow) {
      return (
        <>
          <ConnectedVirusGroup />
          <LeadingStoryDialog handleClick={this.handleClick} />
        </>
      );
    }
    return null;
  }

  private handleClick() {
    this.props.dispatch(closeLeadingStoryDialogAction());
  }
}

const ConnectedLeadingStoryDialog = connect(mapStateToProps)(
  LeadingStoryDialogContainer
);

export default ConnectedLeadingStoryDialog;
