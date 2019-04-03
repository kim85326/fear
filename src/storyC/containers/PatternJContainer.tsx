import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PatternJ from "../components/PatternJ";
import { setIsShowButtonEAction } from "../StoryCActions";
import { openAdventureStoryAction } from "src/adventureStory/AdventureStoryActions";
import { IAppState } from "src/app/AppReducer";

interface IPatternJContainerProps extends IPatternJStateProps {
  dispatch: Dispatch;
}

interface IPatternJStateProps {
  isShowPatternJ: boolean;
}

const mapStateToProps = (state: IAppState): IPatternJStateProps => ({
  isShowPatternJ: state.storyCState.isShowPatternJ
});

class PatternJContainer extends React.Component<IPatternJContainerProps> {
  constructor(props: IPatternJContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <PatternJ
        handleClick={this.handleClick}
        isShowPattern={this.props.isShowPatternJ}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonEAction(true));
    this.props.dispatch(openAdventureStoryAction());
  }
}

const ConnectedPatternJ = connect(mapStateToProps)(PatternJContainer);

export default ConnectedPatternJ;
