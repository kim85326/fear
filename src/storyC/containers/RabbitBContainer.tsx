import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import RabbitB from "../components/RabbitB";
import { setIsShowDialogKAction } from "../StoryCActions";

interface IRabbitAContainerProps {
  dispatch: Dispatch;
}

class RabbitBContainer extends React.Component<IRabbitAContainerProps> {
  constructor(props: IRabbitAContainerProps) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  public render() {
    return (
      <RabbitB
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
      />
    );
  }

  private handleMouseEnter() {
    this.props.dispatch(setIsShowDialogKAction(true));
  }

  private handleMouseLeave() {
    this.props.dispatch(setIsShowDialogKAction(false));
  }
}

const ConnectedRabbitA = connect()(RabbitBContainer);

export default ConnectedRabbitA;
