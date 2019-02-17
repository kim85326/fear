import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternG from "../components/PatternG";
import { openInfoDialogCAction } from "src/infoDialogC/InfoDialogCActions";

interface IPatternGContainerProps {
  dispatch: Dispatch;
}

class PatternGContainer extends React.Component<IPatternGContainerProps> {
  constructor(props: IPatternGContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <PatternG handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(openInfoDialogCAction());
  }
}

const ConnectedPatternG = connect()(PatternGContainer);

export default ConnectedPatternG;
