import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import RabbitA from "../components/RabbitA";
import { setIsShowDialogJAction } from "../StoryBActions";

interface IRabbitAContainerProps {
  dispatch: Dispatch;
}

class RabbitAContainer extends React.Component<IRabbitAContainerProps> {
  constructor(props: IRabbitAContainerProps) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  public render() {
    return (
      <RabbitA
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
      />
    );
  }

  private handleMouseEnter() {
    this.props.dispatch(setIsShowDialogJAction(true));
  }

  private handleMouseLeave() {
    this.props.dispatch(setIsShowDialogJAction(false));
  }
}

const ConnectedRabbitA = connect()(RabbitAContainer);

export default ConnectedRabbitA;
