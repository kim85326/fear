import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import Lottie from "react-lottie";
import ConnectedStoryA from "src/storyA/containers/StoryAContainer";
import ConnectedStoryB from "src/storyB/containers/StoryBContainer";
import "../static/storys.css";
import * as t1 from "../static/T1.json";

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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: t1
    };

    return (
      <div className={`storys ${this.props.show}`}>
        <ConnectedStoryA />
        <div className="t1">
          <div className="t1-json">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <ConnectedStoryB />
      </div>
    );
  }
}

const ConnectedStorys = connect(mapStateToProps)(StorysContainer);

export default ConnectedStorys;
