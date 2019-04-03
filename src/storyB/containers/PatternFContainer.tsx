import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternF from "../components/PatternF";
import { setIsShowButtonDAction } from "../StoryBActions";
import { openOriginalPaintingDialogAction } from "src/originalPaintingDialog/OriginalPaintingDialogActions";
import { IAppState } from "src/app/AppReducer";

interface IPatternFContainerProps extends IPatternFStateProps {
  dispatch: Dispatch;
}

interface IPatternFStateProps {
  isShowPatternF: boolean;
}

const mapStateToProps = (state: IAppState): IPatternFStateProps => ({
  isShowPatternF: state.storyBState.isShowPatternF
});

class PatternFContainer extends React.Component<IPatternFContainerProps> {
  constructor(props: IPatternFContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <PatternF
        handleClick={this.handleClick}
        isShowPattern={this.props.isShowPatternF}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonDAction(true));
    this.props.dispatch(openOriginalPaintingDialogAction());
  }
}

const ConnectedPatternF = connect(mapStateToProps)(PatternFContainer);

export default ConnectedPatternF;
