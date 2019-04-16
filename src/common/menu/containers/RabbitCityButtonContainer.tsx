import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import RabbitCityButton from "../components/RabbitCityButton";

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
    alert("兔子村目前正在裝修中");
  }
}

const ConnectedRabbitCityButton = connect()(RabbitCityButtonContainer);

export default ConnectedRabbitCityButton;
