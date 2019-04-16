import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { resetAppAction } from "src/page/PageManagementAction";
import HomeButton from "../components/HomeButton";

interface IHomeButtonContainerProps {
  dispatch: Dispatch;
}

class HomeButtonContainer extends React.Component<IHomeButtonContainerProps> {
  constructor(props: IHomeButtonContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public render() {
    return <HomeButton handleClick={this.handleClick} />;
  }

  private handleClick(): void {
    this.props.dispatch(resetAppAction());
  }
}

const ConnectedHomeButton = connect()(HomeButtonContainer);

export default ConnectedHomeButton;
