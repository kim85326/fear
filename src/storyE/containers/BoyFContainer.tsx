import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  setIsShowButtonHAction,
  setIsShowButtonIAction
} from "../StoryEAction";
import BoyF from "../components/BoyF";

interface IBoyFContainerProps {
  dispatch: Dispatch;
}

class BoyFContainer extends React.Component<IBoyFContainerProps> {
  constructor(props: IBoyFContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <BoyF handleClick={this.handleClick} />;
  }

  private handleClick() {
    // 顯示按鈕 H
    this.props.dispatch(setIsShowButtonHAction(true));

    // 0.5 秒後，顯示按鈕 I
    setTimeout(() => {
      this.props.dispatch(setIsShowButtonIAction(true));
    }, 500);
  }
}

const ConnectedBoyF = connect()(BoyFContainer);

export default ConnectedBoyF;
