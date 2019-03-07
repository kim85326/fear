import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternI from "../components/PatternI";
import { openInfoDialogBAction } from "../../infoDialogB/InfoDialogBActions";

interface IPatternIContainerProps {
  dispatch: Dispatch;
}

class PatternIContainer extends React.Component<IPatternIContainerProps> {
  constructor(props: IPatternIContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <PatternI handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(openInfoDialogBAction());
  }
}

const ConnectedPatternE = connect()(PatternIContainer);

export default ConnectedPatternE;
