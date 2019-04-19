import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import RabbitCityButton from "../components/RabbitCityButton";
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";
import { closeMenuAction } from "../MenuActions";

interface IRabbitCityButtonContainerProps {
  dispatch: Dispatch;
}

class RabbitCityButtonContainer extends React.Component<
  IRabbitCityButtonContainerProps
> {
  constructor(props: IRabbitCityButtonContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public render() {
    return <RabbitCityButton handleClick={this.handleClick} />;
  }

  private handleClick(): void {
    this.props.dispatch(closeMenuAction());
    this.props.dispatch(setPageAction(Page.rabbitCity));
  }
}

const ConnectedRabbitCityButton = connect()(RabbitCityButtonContainer);

export default ConnectedRabbitCityButton;
