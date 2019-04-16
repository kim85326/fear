import * as React from "react";
import "../static/storyE.css";
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
      <>
        <div className="storyE-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedPatternG />
        <ConnectedPatternH />
        <ConnectedQuestionC />
      </>
    );
  }
}

export default StoryE;
