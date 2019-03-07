import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Well from "../components/Well";
import { setIsShowButtonEAction } from "../StoryCActions";

interface IWellContainerProps {
  dispatch: Dispatch;
}

class WellContainer extends React.Component<IWellContainerProps> {
  constructor(props: IWellContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <Well handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonEAction(true));
    alert("第11頁");
  }
}

const ConnectedWell = connect()(WellContainer);

export default ConnectedWell;
