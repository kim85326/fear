import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ConnectedStoryA from "src/storyA/containers/StoryAContainer";
import ConnectedStoryB from "src/storyB/containers/StoryBContainer";
import "../static/storys.css";

interface IStorysContainerProps extends IStorysStateProps {
  dispatch: Dispatch;
}

interface IStorysStateProps {
  show: string;
}

const mapStateToProps = (state: IAppState): IStorysStateProps => ({
  show: state.storysState.show
});

class StorysContainer extends React.Component<IStorysContainerProps> {
  constructor(props: IStorysContainerProps) {
    super(props);
  }

  public render() {
    return (
      <div className={`storys ${this.props.show}`}>
        <ConnectedStoryA />
        <ConnectedStoryB />
      </div>
    );
  }
}

const ConnectedStorys = connect(mapStateToProps)(StorysContainer);

export default ConnectedStorys;
