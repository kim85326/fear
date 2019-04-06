import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  setIsShowButtonHAction,
  setIsShowButtonIAction
} from "../StoryEAction";
import PatternH from "../components/PatternH";
import { IAppState } from "src/app/AppReducer";

interface IPatternHContainerProps extends IPatternHStateProps {
  dispatch: Dispatch;
}

interface IPatternHStateProps {
  isShowPatternF: boolean;
}

const mapStateToProps = (state: IAppState): IPatternHStateProps => ({
  isShowPatternF: state.storyEState.isShowPatternF
});

class PatternHContainer extends React.Component<IPatternHContainerProps> {
  constructor(props: IPatternHContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <PatternH
        handleClick={this.handleClick}
        isShowPattern={this.props.isShowPatternF}
      />
    );
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

const ConnectedPatternH = connect(mapStateToProps)(PatternHContainer);

export default ConnectedPatternH;
