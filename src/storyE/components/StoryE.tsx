import * as React from "react";
import "../static/storyE.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyE.wav";
import ConnectedPatternH from "../containers/PatternHContainer";
import ConnectedQuestionC from "../containers/QuestionCContainer";
import ConnectedPatternG from "../containers/PatternGContainer";
import Lottie from "react-lottie";
import * as storyEJson from "../static/storyE_background.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: storyEJson
};

interface IStoryEProps {
  isLoading: boolean;
}

class StoryE extends React.Component<IStoryEProps> {
  constructor(props: IStoryEProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyE">
        <div className="storyE-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternG />
        <ConnectedPatternH />
        <ConnectedQuestionC />
      </div>
    );
  }
}

export default StoryE;
