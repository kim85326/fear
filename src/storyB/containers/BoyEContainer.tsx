import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import BoyE from "../components/BoyE";
import { setIsShowButtonDAction } from "../StoryBActions";
import { openOriginalPaintingDialogAction } from "src/originalPaintingDialog/OriginalPaintingDialogActions";

interface IBoyEContainerProps {
  dispatch: Dispatch;
}

class BoyEContainer extends React.Component<IBoyEContainerProps> {
  constructor(props: IBoyEContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <BoyE handleClick={this.handleClick} />;
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonDAction(true));
    this.props.dispatch(openOriginalPaintingDialogAction());
  }
}

const ConnectedBoyE = connect()(BoyEContainer);

export default ConnectedBoyE;
