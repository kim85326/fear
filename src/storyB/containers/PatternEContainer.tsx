import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternE from "../components/PatternE";

interface IPatternEContainerProps {
  dispatch: Dispatch;
}

class PatternEContainer extends React.Component<IPatternEContainerProps> {
  constructor(props: IPatternEContainerProps) {
    super(props);
  }

  public render() {
    return <PatternE handleClick={this.handleClick} />;
  }

  private handleClick() {
    alert("123");
  }
}

const ConnectedPatternE = connect()(PatternEContainer);

export default ConnectedPatternE;
