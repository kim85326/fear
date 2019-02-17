import * as React from "react";
import "../static/storyE.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyE.wav";
import PatternH from "./PatternH";
import Carrots from "./Carrots";
import ConnectedBoyF from "../containers/BoyFContainer";
import ConnectedQuestionC from "../containers/QuestionCContainer";
import ConnectedPatternG from "../containers/PatternGContainer";

interface IStoryEProps {
  isLoading: boolean;
  isShowPatternF: boolean;
}

class StoryE extends React.Component<IStoryEProps> {
  constructor(props: IStoryEProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyE">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternG />
        <ConnectedBoyF />
        <Carrots />
        <PatternH isShowPattern={this.props.isShowPatternF} />
        <ConnectedQuestionC />
      </div>
    );
  }
}

export default StoryE;
