import * as React from "react";
import "../static/leadingStoryDialog.css";
import CloseLeadingStoryDialogButton from "./CloseLeadingStoryDialogButton";
import LeadingStoryDialogText from "./LeadingStoryDialogText";

interface ILeadingStoryDialogProps {
  handleClick: () => void;
}

interface ILeadingStoryDialogState {
  isShowText: boolean;
}

class LeadingStoryDialog extends React.Component<
  ILeadingStoryDialogProps,
  ILeadingStoryDialogState
> {
  constructor(props: ILeadingStoryDialogProps) {
    super(props);
    this.state = {
      isShowText: false
    };
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShowText: true
      });
    }, 1500);
  }

  public render() {
    return (
      <div className="leading-story-dialog-wrapper">
        <div className="leading-story-dialog-mask" />
        <svg
          className="leading-story-dialog"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 856.25 856.25"
        >
          <circle fill="#E7E3E3" cx="428.125" cy="428.125" r="428.125" />
          {this.state.isShowText ? <LeadingStoryDialogText /> : null}
        </svg>
        <CloseLeadingStoryDialogButton handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default LeadingStoryDialog;
