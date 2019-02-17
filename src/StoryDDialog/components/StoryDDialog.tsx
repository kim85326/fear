import * as React from "react";
import "../static/StoryDDialog.css";
import CloseStoryDDialogButton from "./CloseStoryDDialogButton";
import StoryDDialogText from "./StoryDDialogText";

interface IStoryDDialogProps {
  handleClick: () => void;
}

interface IStoryDDialogState {
  isShowText: boolean;
}

class StoryDDialog extends React.Component<
  IStoryDDialogProps,
  IStoryDDialogState
> {
  constructor(props: IStoryDDialogProps) {
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
      <div className="storyD-dialog-wrapper">
        <div className="storyD-dialog-mask" />
        <svg
          className="storyD-dialog"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 856.25 856.25"
        >
          <circle fill="#E7E3E3" cx="428.125" cy="428.125" r="428.125" />
          {this.state.isShowText ? <StoryDDialogText /> : null}
        </svg>
        <CloseStoryDDialogButton handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default StoryDDialog;
