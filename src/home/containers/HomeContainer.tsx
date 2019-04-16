import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Home from "../components/Home";
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IHomeContainerProps {
  dispatch: Dispatch;
}

class HomeContainer extends React.Component<IHomeContainerProps> {
  constructor(props: IHomeContainerProps) {
    super(props);
    this.showFearCity = this.showFearCity.bind(this);
  }

  public render() {
    return <Home showFearCity={this.showFearCity} />;
  }

  private showFearCity() {
    this.props.dispatch(setPageAction(Page.fearCity));
  }
}

const ConnectedHome = connect()(HomeContainer);

export default ConnectedHome;
