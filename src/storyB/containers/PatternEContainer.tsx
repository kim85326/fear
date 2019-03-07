import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternE from "../components/PatternE";
import { openInfoDialogAAction } from "../../infoDialogA/InfoDialogAActions";

interface IPatternEContainerProps {
  dispatch: Dispatch;
}

class PatternEContainer extends React.Component<IPatternEContainerProps> {
  constructor(props: IPatternEContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <PatternE handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(openInfoDialogAAction());
  }
}

const ConnectedPatternE = connect()(PatternEContainer);

export default ConnectedPatternE;
